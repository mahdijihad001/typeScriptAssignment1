{

    // 
    type StringFormatetype = (input: string, toUpper?: boolean) => string;

    const stringFormate: StringFormatetype = (input, toUpper?) => {
        if (toUpper === true) {
            return input.toUpperCase();
        } else {
            return input.toLowerCase();
        }
    };


    const result = stringFormate("Hello", false);


    // 
    type FilterByRatingType = (items: { title: string, rating: number }[]) => { title: string, rating: number }[];

    const filterByRating: FilterByRatingType = (items) => {
        return items.filter((item) => item.rating >= 4);
    }


    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 2.0 }
    ];

    filterByRating(books);



    // 

    const ConcatenateArrays = <T>(...arrays: T[][]): T[] => {
        return ([] as T[]).concat(...arrays)
    }

    const result3 = ConcatenateArrays([12, 33, 55], [33, 55, 11], [44, 66], [66]);


    // 

    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year
        }

        public getInfo() {
            console.log(`Make : ${this.make}, Year : ${this.year}`);
        }
    };


    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model
        };

        getModel() {
            console.log(`Model: ${this.model}`);
        }
    }

    const toyotaCar = new Car("Toyota", 2022, "kg21");

    toyotaCar.getInfo();
    toyotaCar.getModel();



    // 

    interface processValueInterface {
        (value: string | number): number
    };

    const processValue: processValueInterface = (value) => {
        if (typeof value === "string") {
            return value.length
        } else {
            return value * 2
        }
    };

    const result5 = processValue("mohammad Jihad");



    // 


    interface Product {
        name: string;
        price: number;
    }

    const getMostExpensiveProduct = (products: Product[]): Product | null => {
        if (products.length === 0) {
            return null
        };

        let indexProduct = products[0];

        for (let product of products) {
            if (product.price > indexProduct.price) {
                indexProduct.price
            }
        }
        return indexProduct;
    };


    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];

    getMostExpensiveProduct(products);



    // 

    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }


    const getDayType = (day: Day): string => {
        // Europe style
        if (day === Day.Saturday || day === Day.Sunday) {
            return "Weekend"
        } else {
            return "Weekday"
        }
    }
    console.log(getDayType(Day.Friday));
    console.log(getDayType(Day.Saturday));
    console.log(getDayType(Day.Sunday));
    console.log(getDayType(Day.Tuesday));


    // 

    async function squareAsync(n: number): Promise<number> {
        if (n < 0) {
            throw new Error("Negative number not allowed");
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    }
    squareAsync(4).then(console.log);
    squareAsync(-3).catch(console.error);




}