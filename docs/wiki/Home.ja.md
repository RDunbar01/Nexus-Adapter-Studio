# Nexus Adapter Optimization Studio

**Version 2.7.0**

対応するローカル言語モデル向けの実験用アダプターを、独自のコーパスで学習・評価します。

**[ブラウザーで試す](https://rdunbar01.github.io/Nexus-Adapter-Studio/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html)** · [デスクトップ用コンポーネントをダウンロード](https://github.com/RDunbar01/Nexus-Adapter-Studio/tree/main/releases/2.7.0) · [README](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/README.md)

試用ページを開いてインターフェースを確認し、**Check WebGPU adapter** を選択してください。Python のインストールは不要です。短時間で概要を確認するための入口です。モデルの読み込みや処理の完了時間は、入力と端末によって異なります。

ネイティブパッケージ 2.7.0、ブラウザー版 2.7。

## 主な機能

- 対応するアダプター学習向けのローカルモデルとコーパス入力。
- ブラウザー画面からの学習・評価操作。
- 処理前のアーキテクチャ、トークナイザー、テンソル形式、メモリの確認。
- 独自 WebGPU による試用と、別途インストールするネイティブ PyTorch バックエンド。

## 技術的な貢献

モデルの適応とその結果の評価に絞ったローカルインターフェースです。モデルの受け入れ判定を学習と分離し、すべての GGUF ファイルを互換と扱うのではなく、未対応の入力を明示します。

## 単一 HTML ファイルを使う理由

ブラウザー版は、インターフェース、JavaScript、CSS、WGSL カーネルを単一の HTML ファイルにまとめています。ビルド手順や実行時の CDN を必要とせず、オンラインで開き、リンクを共有し、内容を確認しやすくするための構成です。ファイルに含まれるのはブラウザー用エンジンであり、モデルの重みやネイティブ PyTorch バックエンドではありません。

HTTPS 上で WebGPU 対応ブラウザーを使用してください。実行時のネットワーク要求、ネイティブのハードウェア監視、ローカルサーバーとのブリッジは無効です。実際の学習や評価には対応する入力が必要です。ネイティブ PyTorch バックエンドには完全版のダウンロードが必要です。

[English](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home) · [Français](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.fr) · [日本語](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.ja) · [한국어](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.ko)

## Python とネイティブ実行環境の要件

- **推奨インタープリターは標準の64ビット CPython 3.12 です。** インストーラーの案内範囲は **Python 3.11–3.14** ですが、起動用スクリプト自体はこの範囲を強制しません。他のバージョンで開けても、ネイティブバックエンドの互換性を証明したことにはなりません。
- **新しい AMD 実行環境のインストールには、Windows 11 25H2 上の標準64ビット CPython 3.11–3.14 が必要です。free-threaded 版は対象外です。** 既存環境はこのインストール条件の確認前にテストされ、実行テストに成功した場合のみ再利用されます。Python とインストール済み PyTorch wheel の対応が必要です。それ以上の Python バージョン互換性は認定していません。
- 同梱のネイティブテストは **PyTorch 2.14.0+rocm10.1.0**、HIP、設定された RX 7900 XT/XTX を要求し、FP32 の順伝播・逆伝播の値が有限であることを確認します。このパッケージは Python、AMD ドライバー、コンパイラーの前提条件をインストール・変更しません。[AMD 公式互換性表](https://rocm.docs.amd.com/en/latest/compatibility/compatibility-matrix.html)を確認してください。

これらはインストーラーと実行環境の条件であり、実機 Windows・WebView2・Radeon やフルモデルの検証完了を意味しません。テスト成功はすべての精度・コンパイル方式・処理負荷を保証しません。


## 目的

対応が確認されたモデルに対して、自分のコーパスで実験用アダプターを学習し、重みを固定したベースモデルと比較して、対応形式のチェックポイントを書き出します。ベースモデルは同梱されていません。GGUF という拡張子だけでは互換性を判断できません。

## エディションの選択

### ブラウザー版

[HTML](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html) · [README](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/README.md)

HTTPS または対応する安全な localhost オリジンで、WebGPU 対応ブラウザーを使用してください。単一 HTML に独自の JavaScript/WGSL エンジンが含まれます。対応するローカルファイルを読み込んでください。Python、PyTorch、ネイティブサービス、オンラインデータセットの取得、ネイティブ GPU テレメトリーは利用できず、実行時のネットワーク要求は遮断されます。GitHub のソース表示画面ではアプリは実行されません。

### インストール版

[2.7.0 パッケージ](https://github.com/RDunbar01/Nexus-Adapter-Studio/tree/main/releases/2.7.0)のすべてのファイルを、配布時の構成を保って一緒にダウンロードしてください。番号付きのすべての `.nxd` データパーツを [Start_Nexus.py](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/releases/2.7.0/Start_Nexus.py) と同じ場所に置き、対応する Python で `python Start_Nexus.py` を実行します。同意前に[対応するガイド](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/releases/2.7.0/README.md)とインストール内容の概要を確認してください。各 `.nxd` パーツは **10,000,000 バイト以下**、インストール前の配布ファイルは1個あたり **20,000,000 バイト未満**です。アーカイブ全体、復元後のアプリ、インストール済みファイル、ダウンロードするモデルはこれを超える場合があります。異なるリリースを混在させないでください。ネイティブ PyTorch の設定・テストはインストール版の機能であり、HTML 単体の試用版の機能ではありません。

## 測定結果と制限

CPU 回帰テストや静的解析・DOM テストは、実機の Windows/Radeon/WebGPU 検証ではありません。モデル、コーパス、コンテキスト、バッチ、精度、バックエンドが等しい条件で比較してください。学習・回復、プロンプト処理、トークン生成の速度は別々の指標です。すべての環境での互換性や最高速度を保証しません。

## 利用条件とクレジット

Rich Dunbar / Nexus Emerging Technology. Nexus が権利を持つものについては、個人利用および社内での商用テスト・評価が許可されます。配布、改変、本番環境への導入、その他の商用利用には、明示的な書面による同意が必要です。第三者のライセンスと既に付与された権利は変更されません。 [ライセンス](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/LICENSE) · [評価用の追加許諾（英語）](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/COMMERCIAL_EVALUATION_PERMISSION.md).
