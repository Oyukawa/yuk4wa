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
        <v-col cols="auto" md="6">
          <v-card-title>About</v-card-title>
          <v-card-subtitle> This page </v-card-subtitle>
          <v-card-text>
            エンジニアbKiyohのポートフォリオサイトです。
            これまでに手がけた制作物、身につけたスキルをまとめています。
          </v-card-text>
          <v-card-subtitle> Me </v-card-subtitle>
          <v-card-text>
            フロントエンドエンジニアとしてWebアプリ開発に携わっています。
            学校卒業後は、法人営業や販売員を経験した後IT業界へ転職。
            システムエンジニアとして、システム開発から保守・運用まで幅広く経験しました。
            キャリアアップを目的に2022年9月より現職に転職。現在はフロントエンドエンジニアとして仕事してます。
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<style></style>
