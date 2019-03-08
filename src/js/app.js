import { Header, Menu } from '@/components'

export default {
    components: {
        Header,
        Menu,
    },
    data() {
        return {
            isLoginPage: false
        }
    },
    mounted() {
        const { pathname } = window.location;
        if (pathname === '/' || pathname === '/information') this.isLoginPage = true;
    },
    methods: {
    }
}