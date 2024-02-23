import type { MyWork } from './types';
export const SITE_TITLE = 'SEI hoshi';
export const SITE_DESCRIPTION = 'SEI hoshi（柴崎星汰）のウェブサイト';

export  const MY_WORKS: readonly MyWork[] = [
    {
      title: "個人サイト",
      description: "このサイト。Astro.jsを用いて3日程度で制作。",
      url: "https://github.com/shivasaki/cuprite",
      linkTitle: "ソースコード",
      year: "2024",
    },
    {
      title: "ドローン搭載機器、視覚化システム",
      overview:
        "ドローンに搭載して観測を行うデバイス、観測を自動操縦で行うシステム、観測データを視覚化するソフト",
      description:
        "地方大学の研究室からの依頼で、DJIの産業用ドローンを用いた観測システムの開発と運用を行なった。3名のチームを構成し、観測機器の制作と視覚化ソフトについては共同で制作したほか、SDKを利用しそれらを接続する組み込みプログラムや搭載したUbuntuのセットアップなどを開発した。",
      image: "/drone_system_visualize.jpg",
      year: "2023 - ",
    },
    {
      title: "チェーン店会員アプリ",
      overview: "ラーメンチェーン店、わっしょいグループ公式の会員アプリ",
      description:
        "店舗でスタンプを貯めたり、クーポンに交換することができるiOS/Androidアプリケーション。<br/><br/>紙で配布していた会員証の移行と、ユーザー拡大のためヒアリング、見積もり、チーム管理、開発、公開を担当した。",
      url: "https://apps.apple.com/jp/app/%E3%82%8F%E3%81%A3%E3%81%97%E3%82%87%E3%81%84%E5%85%AC%E5%BC%8F%E3%82%A2%E3%83%97%E3%83%AA/id6467764359",
      linkTitle: "App Store「わっしょい公式アプリ」",
      image: "/ramen_chain_app.jpg",
      year: "2022 - ",
    },
    {
      title: "端末補償サービスLP",
      overview: "スマートフォン等の保険を紹介、誘導するウェブサイト",
      description: "スマートフォン等の保険を紹介、誘導するウェブサイト",
      url: "https://sumahoke.jp/",
      linkTitle: "スマホケ｜月々100円からいつでも加入可能｜携帯スマート保険",
      image: "/sumahoke.jpg",
      year: "2022",
    },
    {
      title: "自社開発スイーツEC",
      overview: "自社開発のティラミスを専売するためのLP兼ECサイト",
      description:
        "社内プロジェクトとして製造開発が始まったスイーツを販売するため、専用の特化したサイトを開発。立ち上げや主要な機能の実装を行って以降開発を継続している。<br/>保守性やスピード感からReact, Tailwind CSS, Firebase, Stripeを使用。",
      url: "https://bene-regalo.com/",
      linkTitle: "ティラミス専門店 - BENE REGALO",
      image: "/bene_regalo.jpg",
      year: "2021 - 2023",
    },
    {
      title: "美容用品販売サイト",
      overview: "百店舗規模の美容サロンが販売を行う男性向けコスメや美容家電のLP",
      description:
        "百店舗規模の美容サロンが販売を行う男性向けコスメや美容家電のLP",
      url: "https://m-clear.jp/lp?u=homeclear",
      linkTitle: "【公式】MCLEAR（エムクリア）｜HOMECLEAR（ホームクリア）",
      image: "/mclear.jpg",
      year: "2022",
    },
    {
      title: "アニメイベント公式サイト",
      overview:
        "東映アニメーション「スター☆トゥインクルプリキュア　おほしさまバケーション」のイベントホームページの制作",
      description:
        "東映アニメーション「スター☆トゥインクルプリキュア　おほしさまバケーション」のイベントホームページの制作",
      year: "2019",
    },
    {
      title: "施設監視アプリ",
      overview: "高齢者施設を監視、測定するIoT機器の確認用Androidアプリ",
      description:
        "受託案件として、社内向けAndroidアプリを開発した。AWS Kinesis Video Streamから配信される動画ストリーミングをFlutterで制作したAndroidアプリに表示した。<br/>5人のチームでプログラマーは他にもう一名おり、自分が主な画面の構成、認証、動画表示を担当したほか、受託だったが技術選定やプロジェクト管理にも協力した。",
      year: "2023",
    },
    {
      title: "地域イベントホームページ",
      overview:
        "地域で行われた音楽・フード・ワークショップのイベントのホームページ",
      description:
        "2021年版の引き継ぎとして担当者の居ない中Angularプロジェクトの再構成を行い、2022年版を制作した。また引き続き2023年版のデプロイ作業を一任された。",
      url: "https://gamo4fes.com/index.html",
      linkTitle: "がもよんフェス2023",
      year: "2022 - 2023",
    },
    {
      title: "高級時計販売EC",
      overview:
        "資産価値の高い腕時計を詳細な検索とユーザー機能を利用して売買できるサイト",
      description:
        "受託案件にて試験的なプロジェクトとして新規のチームを組み、FlutterのローコードサービスFlutterFlowにより多くを開発したECサイト。<br/>ローコードを用いた用いたデザイナーとの協業に加え、Circle CIによる自動デプロイを実装した。",
        year: "2022",
    },
    {
      title: "飲食店向けオーダーシステム",
      overview:
        "会員アプリ、モバイルオーダー、統計コンソールを統合したDX支援サービス",
      description:
        "受託案件の中で飲食店のポイントサービスを扱う機会があり、QRを通して店舗と利用者向けのアプリが連携していたものを、店舗が使用するオーダー管理システムのユーザー情報と接続することでより詳細に利用者情報を分析することを目指したもの。<br/><br/>ポイントサービスは当初pure jsで動作しておりオーダーを行うための新規の利用者アプリとオーダーを確認するための店頭用のアプリをFlutterで開発。それぞれ共通してGCP上にマイクロサービスとして提供されており連携が可能。<br/>ポイントサービスについては別のECサイトのユーザー情報と連携して動作するクローンアプリが利用されている。",
      year: "2021",
    },
    {
      title: "縫製工場向けSaaS",
      overview: "縫製工場に向けた型紙OCR SaaS",
      description:
        "縫製工場が使用する型紙を含んだ仕様書を読み取りデータ化するSaaS製品のプロジェクト。シード段階で資金調達を行った企業にて、大規模開発の経験があるスクラムマスターに師事してVue.jsを用いて開発。本格的にスクラム、スプリント、レトロスペクティヴ、PR運用を行った。",
      year: "2020",
    },
    {
      title: "アルバイトマッチングLINEアプリ",
      overview: "単発バイトマッチングLIFFアプリ",
      description:
        "LINE上で完結するWebアプリプラットフォームLIFFを使用した、単発バイトの情報閲覧と、トーク連携により応募から入金申請までできるサービス。<br/><br/>主なバックエンドにFirebaseを用いて開発した。認証はGoogle App EngineでLIFFトークンをGCPの認証トークンに変換するサーバーを設置しておりログインの手間がほとんどないシームレスなユーザー体験を実装している。<br/>またワーカー向けのLIFFアプリの他クライアント向けのwebコンソールも開発を行った。<br/>岡山を中心に3人の営業チームと、のちにエンジニアをもう1人追加しチームでサービスを提供した。<br/><br/>コロナ禍の閉業の影響でサービスはクローズしたが別業種向けに約￥1,000,000で事業売却を行なった。",
      year: "2019 - 2020",
    },
  ];