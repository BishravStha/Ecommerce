import React from 'react';

export default function Product() {
  const coffeeTypes = [
    { name: 'Cappuccino', description: 'A classic coffee with a rich layer of foam.', image: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTuDKXbkn3GeIZJJOodadOiGxwsCP6KWCRAvtBCf_eFNowUrFmuaNz7j5UrV7K7nHgr', tags: ['#Coffee', '#Cappuccino'] },
    { name: 'Caffè Macchiato', description: 'Espresso with a touch of steamed milk.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Macchiato_FourBarrel.jpg/1920px-Macchiato_FourBarrel.jpg', tags: ['#Coffee', '#Macchiato'] },
    { name: 'Latte', description: 'Smooth and creamy with a hint of espresso.', image: 'https://coffeebros.com/cdn/shop/articles/unnamed_be2775a1-186d-40c1-b094-488fa5fa4050.png?v=1675965693', tags: ['#Coffee', '#Latte'] },
    { name: 'Espresso', description: 'Rich and bold with a strong flavor.', image: 'https://parachutecoffee.com/cdn/shop/articles/Untitled_design_11_960x960.png?v=1670859015', tags: ['#Coffee', '#Espresso'] },
    { name: 'Americano', description: 'Diluted espresso with a smooth taste.', image: 'https://pontevecchiosrl.it/wp-content/uploads/2021/03/bere-caffe-americano-in-casa.jpg', tags: ['#Coffee', '#Americano'] }
  ];

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-4 py-10 md:grid-cols-2 lg:grid-cols-3">
      {coffeeTypes.map((coffee, i) => (
        <div key={i} className="relative rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <img
            src={coffee.image}
            alt={coffee.name}
            className="w-full h-48 object-cover transition-opacity duration-300 ease-in-out hover:opacity-90"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{coffee.name}</h2>
            <p className="mt-2 text-gray-700">{coffee.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {coffee.tags.map((tag, idx) => (
                <span key={idx} className="inline-block rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800">
                  {tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
