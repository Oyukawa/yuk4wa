<script setup lang="ts">
import icon from '@/assets/images/icons/IMG_icon.png';
</script>
<template>
  <v-card elevation="0">
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <v-img :src="icon" width="auto" aspect-ratio="1/1" />
        </v-col>
        <v-col cols="6">
          <v-card-title>About</v-card-title>
          <v-card-subtitle> This page </v-card-subtitle>
          <v-card-text>
            エンジニアS3Nのポートフォリオサイトです。
            これまでに手がけた制作物、身につけたスキルをまとめています。
          </v-card-text>
          <v-card-subtitle> Me </v-card-subtitle>
          <v-card-text>
            フロントエンドエンジニアとしてWeb制作に携わっています。
            学校卒業後は、法人営業や販売員を経験。その後その後未経験でIT業界へ転職。
            2017年12月よりシステムエンジニアとして勤務し、主にJavaを用いたシステム開発および保守・運用に携わりました。
            キャリアアップを目的に2022年9月より現職に転職。現在はフロントエンドエンジニアとして勤務しております。
            JavaScriptを用いたフロントエンドの実装を得意としています。
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<style></style>
