import './component1'
import "../module/component2"

const somefunc = () => {
    console.log('import "../fake"')
}

const somefunc2 = () => {
    console.log("import './fake'")
}

const somefunc3 = () => {
    console.log('import "./fake"')
}

const somefunc4 = () => {
    console.log("import '../fake'")
}