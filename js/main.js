

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


window.addEventListener('load', () => {
    const status = navigator.onLine;
    if (!status) {
        alert('you are off line. plese check your network');
    }
  });

  window.addEventListener('offline', (e) => {
    alert('you are off line. plese check your network');
  });
  
  window.addEventListener('online', (e) => {
    console.log('online');
  });
  

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
                e.disabled
                e.preventDefault();
                e.stopPropagation();
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
                    
      }           
    
    }).mount('#calculator')

