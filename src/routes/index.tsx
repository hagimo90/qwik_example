import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
//import { Link } from '@builder.io/qwik-city';
import ProductsGrid from "src/components/products-grid/products-grid"

export default component$(() => {
  return (
    <div class ="flex flex-1 flex-col">
      <section class ="min-h-screen flex relative">

      <img src="https://www.turner-industries.com/wp-content/uploads/2022/03/iStock-1282324577-1400x870.jpg" alt='bg' class="object-cover"/>
      <a href="#products" class ="absolute left-1/2 -translate-x-1/2 top-2/3 -translate-y-1/2 p-4 px-8 border-2 text-white border-solid border-white hover:text-slate-900 after:absolute after:bg-white after:right-full after:top-0 after:w-full after:h-full hover:after:translate-x-full after:duration-300 overflow-hidden ">
        <h3 class="relative z-20 text-center ">Shop Trains</h3></a>
      </section>

      <ProductsGrid/>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Example of using Qwik',
  meta: [
    {
      name: 'description',
      content: 'First example of using Qwik',
    },
  ],
};
