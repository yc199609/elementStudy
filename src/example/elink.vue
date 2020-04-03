<template>
    <div>
        <yc-link disabled>默认链接</yc-link> <br>
        <yc-link type="primary" disabled>主要链接</yc-link> <br>
        <yc-link type="success" disabled>成功链接</yc-link><br>
        <yc-link type="warning" disabled>警告链接</yc-link><br>
        <yc-link type="danger" disabled>危险链接</yc-link><br>
        <yc-link type="info" disabled>信息链接</yc-link><br>
        <yc-link :underline="false">无下划线</yc-link><br>
        <yc-link>有下划线</yc-link><br>
        <yc-link icon="iconguanlishitu">编辑</yc-link>
        <yc-link>查看<Icon name="iconguanlishitu" /> </yc-link>
    </div>
</template>
