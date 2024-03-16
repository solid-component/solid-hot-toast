# solid-hot-toast

Solid Toast Component

## Install

[![solid-hot-toast](https://nodei.co/npm/solid-hot-toast.png)](https://npmjs.org/package/solid-hot-toast)

## Usage

Include the default [styling](https://github.com/react-component/trigger/blob/master/assets/index.less#L4:L11) and then:

```js
import { render } from "solid-js/web";
import { toast, create, Toast, Toaster } from "solid-hot-toast";

const toastValue = create({
    limit: 3
})

render(
  () => (
    <>
      <ToastProvider {...toastValue}>
        <Toaster position={() => "top-center"}/>
      </Trigger>
      <Toaster position={() => "top-right"}/>
      <div onClick={() => toastValue.toast("open")}>click</div>
      <div onClick={() => toast("open")}>click1</div>
    </div>
  ),
  document.getElementById("app")
);
```

## Documentation

Find the full API reference on [official documentation](https://react-hot-toast.com/docs).


solid-hot-toast is released under the MIT license.
