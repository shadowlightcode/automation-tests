/**
# the bookseller's stocklist:
"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"

# list of categories: 
"A", "B", "C", "W"

# result:
"(A : 20) - (B : 114) - (C : 50) - (W : 0)"
 */

function stockList(books, categories) {
    if (!books.length || !categories.length) return '';
        let str = "";
        
        const result = categories.reduce((acc, cat) => {
            acc[cat] = 0
            return acc;
        }, {});

        for(const book of books) {
            const [code, quantity] = book.split(" ");
            const category = code.charAt(0);
            if(result.hasOwnProperty(category)) {
                    result[category] += Number(quantity);
            }
        };

        for(const key in result) {
         str += str ? ` - (${key} : ${result[key]})` : `(${key} : ${result[key]})`;
        }

    return str;
}

// function stockList(books, categories) {
//     if (!books.length || !categories.length) return '';

//     // Initialize category sums with zero
//     const result = categories.reduce((acc, cat) => {
//         acc[cat] = 0;
//         return acc;
//     }, {});

//     // Calculate the sum of book quantities by category
//     for (const book of books) {
//         const [code, quantity] = book.split(' ');
//         const category = code.charAt(0);
//         if (result.hasOwnProperty(category)) {
//             result[category] += Number(quantity);
//         }
//     }

//     // Construct the result string
//     return Object.entries(result)
//         .map(([cat, sum]) => `(${cat} : ${sum})`)
//         .join(' - ');
// }

const books = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
const categories = ["A", "B", "C", "D", "K"]
stockList(books, categories);