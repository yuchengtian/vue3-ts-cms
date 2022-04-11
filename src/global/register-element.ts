import { App } from 'vue'
import { ElInput, ElButton, ElForm, ElFormItem, ElAside } from 'element-plus'
import 'element-plus/lib/theme-chalk/base.css'
const components = [ElButton, ElForm, ElFormItem, ElAside, ElInput]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
