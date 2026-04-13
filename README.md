# App de câmera (Expo)

Aplicação mobile em **React Native / Expo** para capturar **foto**, **vídeo** (com áudio) e **áudio**, guardar os ficheiros na pasta da app, tentar sincronizar com a **galeria** (álbum `CameraAudioApp`) e pré-visualizar o resultado com opção de **compartilhar**.


## Funcionalidades

- Câmera em modo vídeo (qualidade **1080p**, até **60 s** por gravação, microfone ativo)
- **Tirar foto**, **gravar vídeo** e **gravar áudio** (com exclusão mútua entre fluxos quando necessário)
- Troca entre câmera **frontal / traseira** (botão com ícone, estilo overlay)
- Cópia dos ficheiros para `documentDirectory/CameraAudioApp/` e integração com **expo-media-library** quando há permissão
- **Pré-visualização** em ecrã cheio (foto, vídeo com controlos nativos, áudio com reprodução/pausa) com **Safe Area**
- **Compartilhar** o ficheiro guardado via **expo-sharing** (botão circular com ícone, alinhado ao restante UI)

## Tecnologias

- [Expo](https://expo.dev/) SDK ~54  
- [expo-camera](https://docs.expo.dev/versions/latest/sdk/camera/), [expo-audio](https://docs.expo.dev/versions/latest/sdk/audio/), [expo-video](https://docs.expo.dev/versions/latest/sdk/video/)  
- [expo-file-system](https://docs.expo.dev/versions/latest/sdk/filesystem/), [expo-media-library](https://docs.expo.dev/versions/latest/sdk/media-library/), [expo-sharing](https://docs.expo.dev/versions/latest/sdk/sharing/)  
- TypeScript, `react-native-safe-area-context`, `@expo/vector-icons` (Ionicons)

## Como executar

```bash
npm install
npx expo start
```

Depois, use o **Expo Go** no telemóvel ou um emulador (`a` / `i` no terminal do Expo). Para builds nativos: `npx expo run:android` ou `npx expo run:ios`.

## Permissões

A app pede permissões de **câmera**, **microfone** e **biblioteca de media** conforme necessário para capturar, guardar e exportar conteúdo (ver `app.json` / plugins Expo).

## Estrutura (principal)

- `src/App.tsx` — fluxo da câmera, gravações e persistência  
- `src/components/` — botões e overlays (`TapArea`, `FlipCameraButton`, `ShareIconButton`, `MediaPreviewOverlay`)  
- `src/styles/appStyles.ts` — estilos partilhados  
