

// PWA script

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(
        e=>{
            console.log('SW Register')
            // console.log(`event = ${e}`)
        }
    ).catch(
        err => {
            console.log('SW Registation Failed')
            console.log(`err = ${err}`)
        }
    )
}

// -/PWA script


  

Vue.createApp({
    data() {
      return{ 
        btns:[
            {
                btnKey:7,btnCls:[]
            },
            {
                btnKey:8,btnCls:[]
            },
            {
                btnKey:9,btnCls:[]
            },
            {
                btnKey:'del',btnCls:['upperCase','resetAndDelet']
            },
            {
                btnKey:4,btnCls:[]
            },
            {
                btnKey:5,btnCls:[]
            },
            {
                btnKey:6,btnCls:[]
            },
            {
                btnKey:"+",btnCls:[]
            },
            {
                btnKey:1,btnCls:[]
            },
            {
                btnKey:2,btnCls:[]
            },
            {
                btnKey:3,btnCls:[]
            },
            {
                btnKey:"-",btnCls:[]
            },
            {
                btnKey:".",btnCls:[]
            },
            {
                btnKey:0,btnCls:[]
            },
            {
                btnKey:"/",btnCls:[]
            },
            {
                btnKey:"*",btnCls:[]
            },
            {
                btnKey:"reset",btnCls:['resetBtn','upperCase','resetAndDelet']
            },
            {
                btnKey:"=",btnCls:['equalBtn']
            },
        ],
        ans:'',
        displayInput:'',
        theInputText:false,
        regexMob:/Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
       }    
         },
    methods:{
          butonHandel(e){
            let last = this.displayInput.length
            let inputText = document.querySelector('#input')
            inputText.focus()
            inputText.setSelectionRange(0, length)

            

            if (e === 'reset') {
                this.displayInput = ''
                this.ans = ''
            }else if(e == 'del'){
                
                this.displayInput = this.displayInput.slice(0, last-1)
                this.ans = ''
                // console.log(this.displayInput.slice(0, last))
            }else if(e === '='){
                this.ans = '= '+eval(this.displayInput)
            }
            else {

                this.displayInput += e
            }

            
          },
          
          keyDisable(e){
                e.preventDefault();
                e.stopPropagation();
          },

        hasTouchSupport() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
          },

          isMobile() {
            return this.regexMob.test(navigator.userAgent)
          }
                  
    },
    
    watch:{
        displayInput(n,o){
            if (n !== '=') {
                this.ans = ''
            }
        }
    },
    computed:{
                    
      },
    mounted(){
        // dectade mobile or pc
       // let theInputText = document.querySelector('#input')
        this.theInputText.disabled =  this.isMobile() || this.hasTouchSupport()
        // dectade mobile or pc
        
        // online detaced
        window.addEventListener('offline', (e) => {
            alert('you are off line. plese check your network');
          });
          
          window.addEventListener('online', (e) => {
            console.log('online');
          });

          window.addEventListener('load', () => {
            const status = navigator.onLine;
            if (!status) {
                alert('you are off line. plese check your network');
            }
          });
        //  -/ online detaced
    }
    
    }).mount('#calculator')

