# Nexus Adapter Optimization Studio

**Version 2.7.0**

자신의 말뭉치를 사용해 지원되는 로컬 언어 모델의 실험용 어댑터를 훈련하고 평가합니다.

**[브라우저에서 체험하기](https://rdunbar01.github.io/Nexus-Adapter-Studio/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html)** · [데스크톱 구성 요소 다운로드](https://github.com/RDunbar01/Nexus-Adapter-Studio/tree/main/releases/2.7.0) · [README](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/README.md)

체험 페이지에서 인터페이스를 살펴보고 **Check WebGPU adapter**를 선택하세요. Python을 설치할 필요가 없습니다. 빠르게 살펴보기 위한 시작점이며, 모델을 불러오거나 작업을 완료하는 시간은 입력과 기기에 따라 달라집니다.

네이티브 패키지 2.7.0, 브라우저 에디션 2.7.

## 주요 기능

- 허용된 어댑터 훈련 흐름을 위한 로컬 모델과 말뭉치 입력.
- 브라우저 인터페이스의 훈련 및 평가 제어.
- 지원 작업 전 아키텍처, 토크나이저, 텐서 형식 및 메모리 검사.
- 맞춤형 WebGPU 체험과 별도로 설치하는 네이티브 PyTorch 백엔드.

## 기술적 기여

모델 적응을 시험하고 결과를 평가하는 데 집중한 로컬 인터페이스입니다. 모델 허용 여부 검사를 훈련과 분리해, 모든 GGUF 파일을 호환 가능하다고 취급하지 않고 지원되지 않는 입력을 드러냅니다.

## 단일 HTML 파일을 사용하는 이유

브라우저 에디션은 인터페이스, JavaScript, CSS와 WGSL 커널을 하나의 HTML 파일에 담습니다. 빌드 과정이나 실행 시 CDN 없이 온라인 체험을 열고, 링크를 공유하고, 내용을 살펴보기 위한 구성입니다. 이 파일에는 브라우저 엔진이 들어 있으며 모델 가중치나 네이티브 PyTorch 백엔드는 포함되지 않습니다.

HTTPS에서 WebGPU 호환 브라우저를 사용하세요. 실행 중 네트워크 요청, 네이티브 하드웨어 모니터링, 로컬 서버 연결은 비활성화되어 있습니다. 실제 훈련이나 평가에는 지원되는 입력이 필요합니다. 네이티브 PyTorch 백엔드는 전체 다운로드가 필요합니다.

[English](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home) · [Français](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.fr) · [日本語](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.ja) · [한국어](https://github.com/RDunbar01/Nexus-Adapter-Studio/wiki/Home.ko)

## Python 및 네이티브 실행 환경 요구 사항

- **권장 인터프리터는 표준 64비트 CPython 3.12입니다.** 설치 프로그램은 **Python 3.11–3.14**를 안내하지만 부트스트랩 자체가 이 범위를 강제하지는 않습니다. 다른 버전에서 설치 화면이 열린다고 네이티브 백엔드 호환성이 입증되는 것은 아닙니다.
- **새 AMD 런타임 설치에는 Windows 11 25H2의 표준 64비트 CPython 3.11–3.14가 필요하며 free-threaded 빌드는 제외됩니다.** 기존 런타임은 이 설치 조건 검사 전에 테스트되며 런타임 검사를 통과해야만 재사용됩니다. 해당 Python은 설치된 PyTorch wheel과 일치해야 합니다. 더 넓은 Python 버전 호환성을 인증하지 않습니다.
- 포함된 네이티브 검사는 **PyTorch 2.14.0+rocm10.1.0**, HIP, 설정된 RX 7900 XT/XTX를 요구하며 FP32 순전파·역전파 결과가 유한한지 확인합니다. 이 패키지는 Python, AMD 드라이버 또는 컴파일러 필수 구성 요소를 설치하거나 변경하지 않습니다. [AMD 공식 호환성 표](https://rocm.docs.amd.com/en/latest/compatibility/compatibility-matrix.html)를 확인하세요.

이는 설치 프로그램과 런타임의 조건이며 실제 Windows, WebView2, Radeon 또는 전체 모델 검증이 완료되었다는 뜻이 아닙니다. 검사 통과가 모든 정밀도, 컴파일 모드 또는 작업을 검증하지는 않습니다.


## 목적

지원 대상으로 판정된 모델에 대해 자체 코퍼스로 실험용 어댑터를 학습하고, 가중치가 고정된 기본 모델과 비교한 뒤 지원 형식의 체크포인트를 내보냅니다. 기본 모델은 포함되지 않습니다. GGUF 확장자만으로 호환성이 보장되지는 않습니다.

## 에디션 선택

### 브라우저 에디션

[HTML](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/Nexus_Adapter_Optimization_Studio_v2_7_Browser.html) · [README](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/README.md)

HTTPS 또는 지원되는 보안 localhost 출처에서 WebGPU 호환 브라우저를 사용하세요. 단일 HTML 파일에 자체 JavaScript/WGSL 엔진이 포함됩니다. 지원되는 로컬 파일을 가져오세요. Python, PyTorch, 네이티브 서비스, 온라인 데이터셋 다운로드, 네이티브 GPU 측정 정보는 제공되지 않으며 실행 중 네트워크 요청은 차단됩니다. GitHub의 소스 보기 화면에서는 앱이 실행되지 않습니다.

### 설치형 에디션

[2.7.0 패키지](https://github.com/RDunbar01/Nexus-Adapter-Studio/tree/main/releases/2.7.0)의 모든 파일을 제공된 배치 그대로 함께 다운로드하세요. 번호가 있는 모든 `.nxd` 데이터 파트를 [Start_Nexus.py](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/releases/2.7.0/Start_Nexus.py) 옆에 두고 지원되는 Python으로 `python Start_Nexus.py`를 실행하세요. 확인하기 전에 [해당 가이드](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/releases/2.7.0/README.md)와 설치 요약을 읽으세요. 각 `.nxd` 파트는 **10,000,000바이트 이하**이며 설치 전 개별 배포 파일은 **20,000,000바이트 미만**입니다. 전체 압축 파일, 복원된 앱, 설치된 파일과 다운로드한 모델은 더 클 수 있습니다. 다른 릴리스를 섞지 마세요. 네이티브 PyTorch 설정과 테스트는 설치형 에디션에만 해당하며 HTML 단독 체험판의 기능이 아닙니다.

## 측정 결과와 한계

CPU 회귀 테스트와 정적 분석/DOM 검사는 실제 Windows/Radeon/WebGPU 하드웨어 검증이 아닙니다. 모델, 코퍼스, 문맥 길이, 배치, 정밀도, 백엔드가 같은 조건에서만 비교하세요. 학습/회복, 프롬프트 처리, 토큰 생성 처리량은 서로 다른 지표입니다. 모든 환경의 호환성이나 최대 속도를 보장하지 않습니다.

## 이용 조건 및 제작

Rich Dunbar / Nexus Emerging Technology. Nexus가 권리를 보유한 자료는 개인적 이용과 내부 상업적 테스트 및 평가에 사용할 수 있습니다. 배포, 수정, 운영 환경 배포 및 그 밖의 상업적 이용에는 명시적인 서면 동의가 필요합니다. 제3자 라이선스와 이미 부여된 권리는 변경되지 않습니다. [라이선스](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/LICENSE) · [평가 추가 허가(영문)](https://github.com/RDunbar01/Nexus-Adapter-Studio/blob/main/COMMERCIAL_EVALUATION_PERMISSION.md).
