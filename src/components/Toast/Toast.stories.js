import Toast from './Toast'

export default {
    title: 'Components/Toast',
    component: Toast,
     args: {
        icon: false,
        link: true,
        status: 'default',
        children: 'Toast created'
    }
}

export const Default = { args: { status: 'default' } }
