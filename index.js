const express = require('express');
const app = express();

app.use(express.json());

app.route('/bfhl')
  .get((req, res) => {
    res.status(200).json({ operation_code: 1 });
  })
  .post((req, res) => {
    const data = req.body.data || [];
    const numbers = [];
    const alphabets = [];
    let highestAlphabet = '';

    data.forEach(item => {
        if (!isNaN(item)) {
          numbers.push(item);
        } else if (item.length === 1 && isNaN(item)) {
          alphabets.push(item);
                if (item >= 'a' && item <= 'z') {
            if (highestAlphabet === '' || item > highestAlphabet) {
              highestAlphabet = item;
            }
          }
        }
      });
      
      
    res.json({
      is_success: true,
      user_id: 'nithin21',
      email: 'nithin.21bce9933@vitstudent.ac.in',
      roll_number: '21BCE9933',
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestAlphabet ? [highestAlphabet] : []
    });
  });

const port =3000;
app.listen(port, () => {
  console.log(Server running on http://localhost:${port});
});