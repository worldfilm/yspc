var url = '/Index/verify'
new Vue({
  el: '#app',
  components: {},
  mounted() {
    // 首页轮播组件---start----
    var galleryTop = new Swiper('.gallery-top', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      },
      loop: true,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      touchRatio: 0.2,
      slideToClickedSlide: true,
      autoplay: false,
    });
    // 首页轮播组件---end----
    var mySwiper = new Swiper('.swiper-container', {
     autoplay:true,
      loop: true,
    })
  },
  methods: {
    checkd() {
      this.chose ? (this.chose = false) : (this.chose = true);
    },
    register() {
      this.ShowRegister = true
    },
    forgetpassword() {
    },
    publicd() {
    },
    Home(){
      this.ShowSlotmachine =false
      this.ShowSport = false
      this.ShowDealer = false
      this.ShowPromotions = false
      this.ShowHome = true
    },
    //老虎机
    Slotmachine() {
      this.ShowSlotmachine = true
      this.ShowSport = false
      this.ShowDealer = false
      this.ShowPromotions = false
      this.ShowHome = false
    },
    // 体育
    Sport() {
      this.ShowSlotmachine = false
      this.ShowSport = true
      this.ShowDealer = false
      this.ShowPromotions = false
      this.ShowHome = false
    },
    // 真人荷官
    Dealer() {
      this.ShowSlotmachine = false
      this.ShowSport = false
      this.ShowDealer = true
      this.ShowPromotions = false
      this.ShowHome = false
    },
    // 彩票
    Lottery() {

    },
    timeout(){
      setTimeout(() => {
        this.tex = null
      }, 1500)
    },
    // 首页老虎机导航条
    togglelink(e) {
      console.log(e)
      network('/Ajax/getMoreGame', {
        platname: e,
        page: 1,
        limt: 20,
      }, data => {
        console.log(data)
      })
    },
    // 个人中心导航条
    toggleuesr(e) {
      console.log(e)
      this.Showpersonal = false
      this.Showhistory = false
      this.ShowPromotion = false
      this.ShowVip = false
      this.ShowTransfer = false
      this.ShowVipMall = false
      this.ShowOperation = false

      if (e == '个人中心') {
        this.Showpersonal = true
      }
      if (e == '历史') {
        this.Showhistory = true
      }
      if (e == '优惠大厅') {
        this.ShowPromotion = true
      }
      if (e == 'VIP') {
        this.ShowVip = true
      }
      if (e == '游戏转账') {
        this.ShowTransfer = true
      }
      if (e == 'VIP商场') {
        this.ShowVipMall = true
      }
      if (e == '推广赚钱') {
        this.ShowOperation = true
      }
    },
    // 个人中心点击
    User() {
      this.ShowUser = true
    },
    // 修改密码
    changePassword() {
      network('/User/password', {
        password: this.password,
        newPassword: this.newPassword,
        rePassword: this.rePassword,
      }, data => {
        console.log(data)
        this.passwordtex = data.info
      })
    },
    // 用户名输入框失去焦点
    uesenamefocus(){
      if(this.username){
        let prefixUser = this.username.slice(0,2);
        if(prefixUser=='YS'||prefixUser=='yS'||prefixUser=='ys'||prefixUser=='Ys'){
            this.username=this.username.toUpperCase()
        }else{
          this.username= 'YS' + this.username.toUpperCase()
        }
      }
    },
    // 登录
    btnLogin() {
      let userReg = /^[a-zA-Z0-9]{4,12}$/;
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      if (this.username == null || this.username == '') {
        this.tex = "用户名不得为空!";this.timeout()
      } else if (this.password == null || this.password == '') {
        this.tex = "密码不得为空!";this.timeout()
      } else {
        if (!userReg.test(this.username)) {
          this.tex = "请检查您输入的用户名~";this.timeout()
        } else if (!pwdReg.test(this.password)) {
          this.tex = "请检查您输入的密码~";this.timeout()
        } else {
          network('/Index/login', {
            username: this.username,
            password: this.password,
          }, data => {
            this.tex = data.info
            this.timeout()
            if (data.status == 1) {
              sessionStorage.setItem('CHOSE_KEY',true)
              this.Showlogin = false;
              this.ShowLogoOline = true;
              this.tex = data.info
              this.timeout()
            }
          })
        }
      }
    },
    // 退出登录
    LoginOut() {
      network('/User/logOut', null, data => {
        if (data.status == 1) {
          sessionStorage.removeItem('CHOSE_KEY')
          this.Showlogin = true;
          this.ShowLogoOline = false;
        }
      })
    },
    // 关闭窗口组件
    closed() {
      // Hub.$emit('closed', false);
      this.ShowRegister = false
      this.ShowUser = false
    },
    checkd() {
      this.chose ? (this.chose = false) : (this.chose = true);
    },
    // 验证码
    changeverifycodeimg() {
      let str = "?"
      url = url + str
      this.verifycodeimg = url
    },
    // 注册
    btnRegister() {
      let verifycodeReg = /^[a-zA-Z0-9]{4,12}$/;
      let userReg = /^[a-zA-Z0-9]{4,12}$/;
      let pwdReg = /^[a-zA-Z0-9]{6,12}$/;
      if (this.username == null || this.username == '') {
        this.texusername = "用户名不得为空!";this.timeout()
        this.texpassword = null;
        this.tex = null
      } else if (this.password == null || this.password == '') {
        this.texusername = null;
        this.tex = null
        this.texpassword = "密码不得为空!";this.timeout()
      } else if (this.confirmPassword == null || this.confirmPassword == '') {
        this.texusername = null;
        this.texpassword = null;
        this.texconfirmPassword = "请再次输入密码!";this.timeout()
      } else if (this.verifycode == null || this.verifycode == '') {
        this.texusername = null;
        this.texpassword = null;
        this.texconfirmPassword = null;
        this.tex = "验证码不得为空!!";this.timeout()
      } else {
        this.tex = null
        if (!userReg.test(this.username)) {
          this.texusername = "请检查您输入的用户名~";
          this.texpassword = null;
          this.tex = null
        } else if (!pwdReg.test(this.password)) {
          this.texpassword = "请检查您输入的密码~";
          this.texusername = null;
          this.tex = null
        } else if (this.password != this.confirmPassword) {
          this.texconfirmPassword = "两次输入的密码不一致~";
          this.texusername = null;
          this.texpassword = null;
        } else if (!verifycodeReg.test(this.verifycode)) {
          this.tex = "请检查您输入的验证码~";this.timeout()
          this.texusername = null;
          this.texpassword = null;
          this.texconfirmPassword = null;
        } else {
          if (this.chose) {
            this.texconfirmPassword = null;
            network('/Index/signup', {
              username: 'YS' + this.username.toUpperCase(),
              password: this.password,
              repassword: this.confirmPassword,
              txtValidateCode: this.verifycode,
            }, data => {
                this.tex = data.info
                this.timeout()
              if (data.info == '验证码错误，请重新填写') {
                this.changeverifycodeimg()
              }
              if (data.status == 1) {
                sessionStorage.setItem('CHOSE_KEY',true)
                this.closed()
              }
            })
          } else {
            this.tex = "不勾选表示不同意网站协议，不能注册！";this.timeout()
          }

        }
      }
    },
    testemail() {
      network('/User/ajax_information', {
        email: this.testemail,
      }, data => {
        console.log(data)
      })
    },
    testweixin() {
      network('/User/ajax_information', {
        weixin: this.testweixin,
      }, data => {
        console.log(data)
      })
    },
    testqq() {
      network('/User/ajax_information', {
        weixin: this.testweixin,
      }, data => {
        console.log(data)
      })
    },
    testmobile() {
      network('/User/ajax_information', {
        username: this.testusername,
        tel: this.testmobile,
      }, data => {
        console.log(data)
      })
    },
    showoption() {
      this.Showlist = !this.Showlist
    },
    listonblur(e) {
      console.log(e)
    },
    // 游戏列表mouseover
    limouseover(idx) {
      this.checkindex = idx
    },
    // 游戏列表点击选择游戏
    choseGame(idx) {
      console.log(idx)
    },
    // 真人荷官游戏种类点击
    choseGameDownLoad(idx){
          console.log(idx)
          var arr=['/public/yspc/img/icon-ag.png',
                    '/public/yspc/img/icon-ebet.png',
                    '/public/yspc/img/icon-agq.png',
                    '/public/yspc/img/icon-bbin.png',
                    '/public/yspc/img/icon-og.png']
          // var arr2=['Asia Gaming 团队秉持「只为非同凡享」的态度，为玩家带来最高层次的享乐新体验。',
          //           'eBet 跟著时代的潮流，致力于发展符合客户需求的产品，让玩家享受著尊贵的游戏体验。',
          //           'agq 跟著时代的潮流，致力于发展符合客户需求的产品，让玩家享受著尊贵的游戏体验。',
          //           'bbin 跟著时代的潮流，致力于发展符合客户需求的产品，让玩家享受著尊贵的游戏体验。',
          //           'og 跟著时代的潮流，致力于发展符合客户需求的产品，让玩家享受著尊贵的游戏体验。',
          //          ]
                    this.gameicon=arr[idx]
                    // this.gametex=arr2[idx]
    },
    // 优惠活动
    Promotions() {
      this.ShowSlotmachine = false
      this.ShowSport = false
      this.ShowDealer = false
      this.ShowPromotions = true
      this.ShowHome = false
      this.ShowPromotionslist=true
      this.ShowPromotionsDetil=false
      console.log(this.ShowPromotions)
    },
    //优惠详情
    checkmore(e){
      console.log(e)
      this.Detillist=e
      this.ShowPromotionslist=false
      this.ShowPromotionsDetil=true

    },
    //优惠活动导航条
    PromotionsNav(e) {
      this.ShowPromotionslist=true
      this.ShowPromotionsDetil=false
      console.log(e)
      // network('/Ajax/getMoreGame', {
      //   platname: e,
      //   page: 1,
      //   limt: 20,
      // }, data => {
      //   console.log(data)
      // })
    },
    //左侧浮窗
    leftmenu(idx){
      console.log(idx)
      if(idx==0){
          this.ShowHome=true
          this.ShowSlotmachine = false
          this.ShowSport = false
          this.ShowDealer = false
          this.ShowPromotions = false
      }else{
        if(sessionStorage.getItem('CHOSE_KEY')){
            if(idx==3){
              this.ShowUser=true
            }
        }else{
          this.tex = "请先登录!";
          this.timeout()
        }
      }

    },
    // rightmenu(idx){
    //
    // },
  },
  data() {
    return {
      Detillist:{},
      ShowRegister: false,
      // ShowForgetPassword: false,没接口，暂时不做此功能
      ShowUser: false,
      username: null,
      nickname: null,
      password: null,
      confirmPassword: null,
      verifycode: null,
      verifycodeimg: '/Index/verify',
      texusername: null,
      texpassword: null,
      texconfirmPassword: null,
      texverifycode: null,
      tex: null,
      data: {},
      chose: true,
      disable: 'disable',
      Showlogin: true,
      ShowLogoOline: false,
      chose: true,
      tex: null,
      data: {},
      money: '200',
      ShowRegister: false, //注册
      ShowUser: false, //个人中心
      Showpersonal: true, //个人信息
      Showhistory: false, //历史
      ShowTransfer: false, //游戏转账
      ShowOperation: false, //推广赚钱
      ShowPromotion: false, //优惠大厅
      ShowVip: false, //vip
      ShowVipMall: false, //vip商城
      email: null, //检测邮箱
      weixin: null, //检测微信
      qq: null, //检测qq
      mobile: null, //检测短信
      newPassword: null, //新密码
      rePassword: null, //重复新密码
      passwordtex: null, //密码错误提示
      class1: true,
      class2: false,
      checkindex: null,
      ShowHome: true, //首页
      ShowDealer: false, //真人荷官
      ShowHelp: false, //帮助
      ShowPromotions: false, //优惠活动
      ShowSlotmachine: false, //老虎机
      ShowSport: false, //体育
      ShowPromotionsDetil:false,//优惠活动详情
      ShowPromotionslist:true,
      ShowLeftMenu:true,
      ShowRightMenu:true,
      navPromotionslist:[{name:'老虎机'},{name:'体育'},{name:'真人荷官'},],
      gameicon:'/public/yspc/img/icon-ag.png',//真人荷官icon
      gametex:'亚盛集团 团队秉持「只为非同凡享」的态度，为玩家带来最高层次的享乐新体验。',//真人荷官text
      qrsrc: '/public/yspc/img/qr.png',
      Dealerlist:[{src:'/public/yspc/img/ag.png'},
      {src:'/public/yspc/img/ebet.png'},
      {src:'/public/yspc/img/agq.png'},
      {src:'/public/yspc/img/bbin.png'},
      {src:'/public/yspc/img/og.png'}],
      sportlist:[{src:'/public/yspc/img/ty_b1.png'},{src:'/public/yspc/img/ty_b2.png'},{src:'/public/yspc/img/ty_b3.png'}],
      leftmenuu:[{name:'首页',src:'/public/yspc/img/fuch2.png'},
                  {name:'存款',src:'/public/yspc/img/fuch3.png'},
                  {name:'取款',src:'/public/yspc/img/fuch4.png'},
                  {name:'个人空间',src:'/public/yspc/img/fuch5.png'},],
      historylist: [{
        name: '所有'
      }, {
        name: '存款'
      }, {
        name: '取款'
      }, {
        name: '红利'
      }],
      historylist2: [{
        type: '第三方支付',
        money: '999999',
        day: '2018-12-12 12:22:22',
        status: '完成',
      }, {
        type: '网银转账',
        money: '999999',
        day: '2018-12-12 12:22:22',
        status: '完成',
      }, {
        type: '手工提款',
        money: '999999',
        day: '2018-12-12 12:22:22',
        status: '拒绝',
      }, {
        type: '及时反水',
        money: '999999',
        day: '2018-12-12 12:22:22',
        status: '完成',
      }, ],
      navlist: [{
          name: '热门游戏'
        },
        {
          name: 'PT'
        },
        {
          name: 'MG'
        },
        {
          name: 'PNG'
        },
        {
          name: 'SW'
        },
        {
          name: 'BS'
        },
        {
          name: 'QT'
        },
        {
          name: 'MW'
        },
        {
          name: 'BBIN'
        }
      ],
      userlist: [{
          name: '个人中心'
        },
        {
          name: '历史'
        },
        {
          name: '优惠大厅'
        },
        {
          name: 'VIP'
        },
        {
          name: '游戏转账'
        },
        {
          name: '推广赚钱'
        },
        {
          name: 'VIP商场'
        },
      ],
      list: [{
          src: '/public/yspc/img/b1.jpg'
        }, {
          src: '/public/yspc/img/b2.jpg'
        },
        {
          src: '/public/yspc/img/b3.jpg'
        },
        {
          src: '/public/yspc/img/b4.jpg'
        },
      ],
      list2: [{
          src: '/public/yspc/img/b1s.png'
        },
        {
          src: '/public/yspc/img/b2s.png'
        },
        {
          src: '/public/yspc/img/b3s.png'
        },
        {
          src: '/public/yspc/img/b4s.png'
        },
      ],
      msg: '本平台禁止七码及七码以上的无风险投注，禁止利用平台进行套利、套现、对打等违规行为，风控系统如检测到玩家有违规行为，将会对该账号进行封号处理，请遵守“幸运彩票”游戏规则，幸运彩票祝您游戏愉快，盈利多多！！！',
      gamelist: [{
        src: '/public/yspc/img/yx1.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx2.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx3.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx4.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx5.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx6.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx7.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx8.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx9.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx10.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx11.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx12.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx13.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx14.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx15.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx16.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx17.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx18.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx19.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx20.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx21.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx22.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx23.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx24.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx25.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx26.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx27.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx28.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx29.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx30.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx31.png',
        name: '',
      }, {
        src: '/public/yspc/img/yx32.png',
        name: '',
      }, ],
      footerlist: [{
          src: '/public/yspc/img/footerlogo_2.png'
        },
        {
          src: '/public/yspc/img/footerlogo_3.png'
        },
        {
          src: '/public/yspc/img/footerlogo_11.png'
        },
        {
          src: '/public/yspc/img/footerlogo_5.png'
        },
        {
          src: '/public/yspc/img/footerlogo_6.png'
        },
        {
          src: '/public/yspc/img/footerlogo_7.png'
        },
        {
          src: '/public/yspc/img/footerlogo_8.png'
        },
        {
          src: '/public/yspc/img/footerlogo_9.png'
        },
        {
          src: '/public/yspc/img/footerlogo_12.png'
        },
        {
          src: '/public/yspc/img/footerlogo_10.png'
        },
      ],
      vipmall: [{
        price: '80',
        warrior: '80',
        Elite: '80',
        Grandmaster: '80',
        Shizong: '80',
        epic: '80',
        legend: '80',
        myth: '80',
        src: '/public/yspc/img/8.png',
        name: '8'
      }, {
        price: '200',
        warrior: '200',
        Elite: '200',
        Grandmaster: '196',
        Shizong: '192',
        epic: '188',
        legend: '184',
        myth: '180',
        src: '/public/yspc/img/20.png',
        name: '20'
      }, {
        price: '1000',
        warrior: '1000',
        Elite: '1000',
        Grandmaster: '980',
        Shizong: '960',
        epic: '940',
        legend: '920',
        myth: '900',
        src: '/public/yspc/img/100.png',
        name: '100'
      }, {
        price: '5000',
        warrior: '5000',
        Elite: '5000',
        Grandmaster: '4900',
        Shizong: '4800',
        epic: '4700',
        legend: '4600',
        myth: '4500',
        src: '/public/yspc/img/500.png',
        name: '500'
      }, {
        price: '10000',
        warrior: '10000',
        Elite: '10000',
        Grandmaster: '9800',
        Shizong: '9600',
        epic: '9400',
        legend: '9200',
        myth: '9000',
        src: '/public/yspc/img/1000.png',
        name: '1000'
      }, {
        price: '50000',
        warrior: '50000',
        Elite: '50000',
        Grandmaster: '49000',
        Shizong: '48000',
        epic: '47000',
        legend: '46000',
        myth: '45000',
        src: '/public/yspc/img/5000.png',
        name: '5000'
      }, {
        price: '100000',
        warrior: '100000',
        Elite: '100000',
        Grandmaster: '98000',
        Shizong: '96000',
        epic: '94000',
        legend: '92000',
        myth: '90000',
        src: '/public/yspc/img/10000.png',
        name: '10000'
      }, {
        price: '98000',
        warrior: '98000',
        Elite: '98000',
        Grandmaster: '96040',
        Shizong: '94080',
        epic: '92120',
        legend: '90160',
        myth: '88200',
        src: '/public/yspc/img/x.png',
        name: 'Iphone X'
      }, {
        price: '76000',
        warrior: '76000',
        Elite: '76000',
        Grandmaster: '74480',
        Shizong: '72960',
        epic: '71440',
        legend: '69920',
        myth: '68400',
        src: '/public/yspc/img/s9.png',
        name: '三星S9+'
      }, {
        price: '50000',
        warrior: '50000',
        Elite: '50000',
        Grandmaster: '49000',
        Shizong: '48000',
        epic: '47000',
        legend: '46000',
        myth: '45000',
        src: '/public/yspc/img/mate10.png',
        name: '华为M10 Pro'
      }, {
        price: '350000',
        warrior: '350000',
        Elite: '350000',
        Grandmaster: '343000',
        Shizong: '336000',
        epic: '329000',
        legend: '322000',
        myth: '315000',
        src: '/public/yspc/img/waixr.png',
        name: '外星人',
      }, {
        price: '180000',
        warrior: '180000',
        Elite: '180000',
        Grandmaster: '176400',
        Shizong: '172800',
        epic: '169200',
        legend: '165600',
        myth: '162000',
        src: '/public/yspc/img/thinkpad.png',
        name: 'thinkpad X1'
      }, {
        price: '1980000',
        warrior: '1980000',
        Elite: '1980000',
        Grandmaster: '1940400',
        Shizong: '1900800',
        epic: '1861200',
        legend: '1821600',
        myth: '178200',
        src: '/public/yspc/img/gold.png',
        name: '黄金按摩椅'
      }, {
        price: '1900000',
        warrior: '1900000',
        Elite: '1900000',
        Grandmaster: '1862000',
        Shizong: '1824000',
        epic: '1786000',
        legend: '1748000',
        myth: '1710000',
        src: '/public/yspc/img/tral.png',
        name: '海岛旅游私人定制'
      }, ],
      transferlist: [{
        name: '中心钱包',
        money: '10000.00'
      }, {
        name: 'AG真人',
        money: '144.00'
      }, {
        name: 'AGQ极速',
        money: '144.00'
      }, {
        name: 'eBET真人',
        money: '144.00'
      }, {
        name: 'MG全平台',
        money: '144.00'
      }, {
        name: 'PT电子游艺',
        money: '144.00'
      }, {
        name: 'QT电子游艺',
        money: '144.00'
      }, {
        name: '沙巴体育',
        money: '144.00'
      }, {
        name: 'BBIN平台',
        money: '144.00'
      }, {
        name: 'PNG电子游艺',
        money: '144.00'
      }, {
        name: 'MW电子游艺',
        money: '144.00'
      }, {
        name: 'SW电子游艺',
        money: '144.00'
      }, {
        name: 'Betsoft',
        money: '144.00'
      }, ],
      PromotionsList:[
        {
          name:'老虎机笔笔狂送38%',
          time:'2015-05-01 00:00--2018-10-31 23:59 （GMT+8）',
          active:'所有老虎机玩家每次存款都可自助申请最高38%的红利',
          platform:'MG,PT,QT,PNG,SW,MW,BS',
          text1:'此活动与返水活动共享',
          text2:'所有累积游戏，21点游戏，轮盘游戏百家乐游戏，骰宝游戏，桌面游戏，视频扑克，Pontoo游戏，Xraps游戏，赌场战争游戏，基诺，宾果游戏，Holdem游戏，牌九游戏，多旋转老虎机和老虎机奖金翻倍投注将不被计算投注金额，且在以上游戏中的盈利金额会被扣除。',
          form:{},
          srcs:'/public/yspc/img/doublefanshui.png',
          srcb:'/public/yspc/img/doublefanshui_b.jpg'
        },
        {
          name:'老虎机返水奖中奖',
          time:'2015-05-01 00:00--2018-10-31 23:59 （GMT+8）',
          active:'所有老虎机玩家每次存款都可自助申请最高38%的红利',
          platform:'MG',
          text1:'此奖金一倍流水可申请提款。',
          text2:'所有累积游戏，21点游戏，轮盘游戏百家乐游戏，骰宝游戏，桌面游戏，视频扑克，Pontoo游戏，Xraps游戏，赌场战争游戏，基诺，宾果游戏，Holdem游戏，牌九游戏，多旋转老虎机和老虎机奖金翻倍投注将不被计算投注金额，且在以上游戏中的盈利金额会被扣除。',
          text3:'此活动不与返水活动共享。',
          form:{},
          srcs:'/public/yspc/img/fanshui.png',
          srcb:'/public/yspc/img/fanshui_b.png',
        },
        {
          name:'老虎机返水天天有，最高1.2%等你来挑战',
          time:'2015-05-01 00:00--2018-10-31 23:59 （GMT+8）',
          active:'所有在以上平台老虎机投注的玩家都可按以下比率获得返水优惠。',
          platform:'MG,PT,QT,PNG,SW,MW,BS,BBIN',
          text1:'此奖金一倍流水可申请提款。',
          text2:'所有累积游戏，21点游戏，轮盘游戏百家乐游戏，骰宝游戏，桌面游戏，视频扑克，Pontoo游戏，Xraps游戏，赌场战争游戏，基诺，宾果游戏，Holdem游戏，牌九游戏，多旋转老虎机和老虎机奖金翻倍投注将不被计算投注金额，且在以上游戏中的盈利金额会被扣除。',
          text3:'此活动不与返水活动共享。',
          form:{},
          srcs:'/public/yspc/img/fanshui1.2.png',
          srcb:'/public/yspc/img/fanshui1.2_b.png',
        },
      ]
    }
  },
})

function network(url, data, fun) {
  if (!data) {
    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function(data) {
        fun(data)
      },
      error: function(data) {
        fun(data)
      }
    });
  } else {
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      ContentType: "application/x-www-form-urlencoded",
      dataType: "json",
      success: function(data) {
        fun(data)
      },
      error: function(data) {
        // fun(data)
      }
    });
  }


}
