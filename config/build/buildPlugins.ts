import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExctractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpaclPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
    paths,
    isDev,
    analyze,
    project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExctractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ];

    if (isDev) {
        plugins.push(
            new webpack.DefinePlugin({
                __IS_DEV__: JSON.stringify(isDev),
                __PROJECT__: JSON.stringify(project),
            })
        );

        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: !!analyze,
            })
        );

        plugins.push(new ReactRefreshWebpaclPlugin());
    }

    return plugins;
}
