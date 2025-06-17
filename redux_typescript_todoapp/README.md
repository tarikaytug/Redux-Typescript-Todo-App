# Redux + TypeScript Todo App

Bu proje, Redux ve TypeScript kullanılarak geliştirilmiş basit bir Todo uygulamasıdır. Modern web geliştirme pratiklerini ve state yönetimini göstermek için tasarlanmıştır.

## 🚀 Kullanılan Teknolojiler

- React 19
- TypeScript
- Redux Toolkit

## 📦 Proje Yapısı

```
src/
├── components/         # React bileşenleri
│   ├── Todo.tsx       # Tekil todo bileşeni
│   ├── TodoList.tsx   # Todo listesi bileşeni
│   └── TodoCreate.tsx # Yeni todo oluşturma bileşeni
├── redux/             # Redux store ve slice'lar
│   ├── store.tsx      # Redux store konfigürasyonu
│   └── todoSlice.tsx  # Todo state yönetimi
├── types/             # TypeScript tip tanımlamaları
│   └── Types.tsx      # Todo ve state tipleri

```

## 🛠️ Özellikler

- Todo ekleme
- Todo silme
- Todo düzenleme
- TypeScript ile tip güvenliği
- Redux ile merkezi state yönetimi

## 🔧 Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/tarikaytug/Redux-Typescript-Todo-App
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## 💡 Nasıl Çalışır?

### State Yönetimi
- Redux Toolkit kullanılarak merkezi state yönetimi sağlanmıştır
- `todoSlice.tsx` içinde todo işlemleri için reducer'lar tanımlanmıştır:
  - `createTodo`: Yeni todo ekleme
  - `removeTodoById`: Todo silme
  - `updateTodo`: Todo güncelleme

### Tip Güvenliği
- TypeScript ile tam tip güvenliği sağlanmıştır
- `Types.tsx` içinde tanımlanan interface'ler:
  - `TodoType`: Todo öğelerinin yapısı
  - `TodoInitialState`: Redux store'un başlangıç durumu

### Bileşenler
- `TodoCreate`: Yeni todo oluşturma formu
- `TodoList`: Tüm todoları listeler
- `Todo`: Tekil todo öğesi ve düzenleme/silme işlemleri

## 🎨 Stil ve Tasarım
- Modern ve minimal tasarım
- Responsive layout
- React Icons ile görsel öğeler
- CSS ile özelleştirilmiş bileşenler


