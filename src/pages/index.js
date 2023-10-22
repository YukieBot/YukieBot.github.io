import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import './index.css'

export default function () {
    return (
    
        <Layout description='由Orz查分组共同开发的OrzmicBot，雪绘Bot，qq机器人，'>
            <div id='index-page-container'>
                <div id='index-page-bg'></div>
                <div id='index-page-bg-mask'></div>
                <div id='index-page-main'>
                    <div id='logo'>
                        <span>雪绘Botの使用文档</span>
                    </div>
                    
                    <div id='index-page-description'>
                        开始你的Orz查分之旅吧！
                    </div>
                    <div id='index-page-button-container'>
                        <div id='index-page-button'>
                            <Link
                                className="button button--secondary button--lg"
                                to="./docs/intro">
                                开始查阅
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}