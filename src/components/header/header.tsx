import { component$, useStore, useClientEffect$ } from '@builder.io/qwik';


export default component$(() => {
  const store = useStore({
    scrolled : false,
    numItems : 0,
    modal: false

  })
  useClientEffect$(()=> {
    if (localStorage.getItem('train-basket')) {
      const numTrains = JSON.parse(localStorage.getItem('train-basket')).items.length
      store.numItems = numTrains
    }
  })


  return (
    <header class={"fixed top-0 left-0 w-full flex justify-between items-center p-4 text-white text-xl sm:text-4xl sm:p-8 z-40 " + (store.scrolled ? "bg-slate-900 shadow" : "bg-transparent")} document:onScroll$={()=> {
      if (window.scrollY > 10) {
        store.scrolled = true
      } else {
        store.scrolled = false
      }
    }}>
      <a href="/">Cogitto</a>

      <div class="text-xl sm:text-3xl relative cursor-pointer" onclick$={()=> {
        store.modal=true
      }}>
        {store.modal && <>
        <div id ="model" class="absolute top-0 right-0 w-full h-screen bg-white">
          <div class ="flex items-center justify-between pb-4 border-b">
            <h1 class="font-bold text-4xl">Cart</h1>
            <i id="modal-close" onclick$={()=> {
              store.modal=false
            }} 
            class="fa-sharp fa-solid fa-xmark-large"></i>
          </div>
        </div>
        </>}
        <i class="fa-solid fa-cart-shopping"></i>
        {store.numItems > 0 && <> <div class="absolute -top-2 -right-2 bg-slate-900 rounded-full h-4 w-4 text-xs grid place-items-center">{store.numItems}</div>
        </>}
        </div>
      
      
    </header>
  );
});
