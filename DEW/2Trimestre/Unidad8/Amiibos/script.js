const { createApp } = Vue;

const DrinkCard = {
    props: ['drink'],
    template: `
        <div class="col-md-4 col-lg-3 mb-4">
            <div class="card h-100 shadow-sm">
                <img 
                    :src="drink.strDrinkThumb" 
                    class="card-img-top" 
                    :alt="drink.strDrink"
                >
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">{{ drink.strDrink }}</h5>
                    <p class="text-muted">ID: {{ drink.idDrink }}</p>
                    <button 
                        class="btn btn-primary mt-auto"
                        @click="$emit('add-to-cart', drink)"
                    >
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    `
};

createApp({
    components: {
        'drink-card': DrinkCard
    },

    data() {
        return {
            drinks: [],
            cart: []
        };
    },

    mounted() {
        this.getDrinks();
        this.loadCart();
    },

    methods: {
        async getDrinks() {
            const response = await fetch(
                'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum'
            );
            const data = await response.json();
            this.drinks = data.drinks;
        },

        addToCart(drink) {
            const key = `cartItem_${drink.idDrink}`;
            const item = localStorage.getItem(key);

            if (item) {
                const parsed = JSON.parse(item);
                parsed.qty++;
                localStorage.setItem(key, JSON.stringify(parsed));
            } else {
                localStorage.setItem(
                    key,
                    JSON.stringify({
                        id: drink.idDrink,
                        name: drink.strDrink,
                        qty: 1
                    })
                );
            }

            this.loadCart();
        },

        loadCart() {
            this.cart = Object.keys(localStorage)
                .filter(key => key.startsWith('cartItem_'))
                .map(key => JSON.parse(localStorage.getItem(key)));
        }
    }
}).mount('#app');