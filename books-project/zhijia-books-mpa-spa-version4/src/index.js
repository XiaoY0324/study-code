import { __exportStar } from "tslib";

class Index {
    constructor(str) {
        this.str = str;
    }

    say() {
        console.log(this.str);
    }
}

const index = new Index('葫芦怪12');

index.say();

export default index;