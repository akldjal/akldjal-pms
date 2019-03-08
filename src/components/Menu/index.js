export default {
    props: {},
    data() {
        return {
            datas: [{
                datas: [{
                    subtitle: '个人信息', actived: true, path: '/information',
                }, {
                    subtitle: '人员列表', actived: false, path: '/list',
                }, ]
            }]
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initMenu();
        })
    },
    methods: {
        initMenu() {
            console.log('initMenu')
            const datas = this.datas;
            const { pathname } = window.location;
            let menuValue = {};
            for (let item of datas) {
                for (let i = 0; i < item.datas.length; i++) {
                    let subItem = item.datas[i];
                    if (pathname == subItem.path) {
                        subItem.actived = true;
                        menuValue = {
                            title: item.title,
                            subItem: subItem,
                        };
                    } else {
                        let actived = false;
                        for(let j of subItem.subPages) {
                            if(j.path === pathname) {
                                menuValue = {
                                    title: subItem.subtitle,
                                    subItem: j,
                                };
                                actived = true;
                            }
                        }
                        subItem.actived = actived;
                    }
                }
            }
            this.$emit('onPress', menuValue);
        },
        handleClick(index, subIndex) {
            const datas = this.datas;
            for (let [_index, item] of datas.entries()) {
                for (let [_subIndex, subItem] of item.datas.entries()) {
                    if (_subIndex === subIndex && index === _index) {
                        subItem.actived = true;
                    } else {
                        subItem.actived = false;
                    }
                }
            }
            this.$router.push(`${datas[index].datas[subIndex].path}`);
            this.$emit('onPress', {
                title: datas[index].title,
                subItem: datas[index].datas[subIndex]
            });
        }
    }
};