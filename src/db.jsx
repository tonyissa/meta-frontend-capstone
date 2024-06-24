import GreekSaladImg from './assets/greeksalad.jpg';
import LemonDessert from './assets/lemondessert.jpg';
import Bruchetta from './assets/bruchetta.svg';

const food1 = {
    title: "Greek Salad",
    img: GreekSaladImg,
    description: "This refreshing Greek salad recipe with cucumber, tomatoes, feta cheese, and an easy oregano and olive oil dressing makes a standout summer salad!",
    key: crypto.randomUUID()
}

const food2 = {
    title: "Lemon Dessert",
    img: LemonDessert,
    description: "This Lemon Lush Dessert is made up of shortbread crust that's layered with a lemon cream cheese filling, lemon pudding, and whipped cream.",
    key: crypto.randomUUID()
}

const food3 = {
    title: "Bruchetta",
    img: Bruchetta,
    description: "Bruschetta is a classic Italian appetizer that is easy to make at home. Toasted bread is topped with a mixture of juicy tomatoes, garlic, Parmesan cheese, fresh basil, and balsamic.",
    key: crypto.randomUUID()
}

const sampleMenu = [food1, food2, food3];

export default sampleMenu;