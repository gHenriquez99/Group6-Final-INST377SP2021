const myForm = document.querySelector('#addNewForm');
const productid = document.querySelector('#productid');
const description = document.querySelector('#description');
const color = document.querySelector('#color');
const price = document.querySelector('#price');
const familyid = document.querySelector('#familyid');
const categoryid = document.querySelector('#categoryid');
const imglink = document.querySelector('#imglink');

const delForm = document.querySelector('#deleteForm');
const delProdID = document.querySelector('#delproductid');

const updateForm = document.querySelector('#updateForm');
const UPproductid = document.querySelector('#UPproductid');
const UPdescription = document.querySelector('#UPdescription');
const UPfamilyid = document.querySelector('#UPfamilyid');

updateForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.info('submitted', event.target);
  const update = await fetch(`/api/products/${UPproductid.value}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product_id: productid.value,
      product_description: UPdescription.value,
      family_id: UPfamilyid.value
    })
  });
});

delForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const delRecord = await fetch(`/api/products/${delProdID.value}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
});

myForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.info('submitted', event.target);
  const post = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      product_id: productid.value,
      product_description: description.value,
      product_color: color.value,
      product_unit_price: price.value,
      family_id: familyid.value,
      category_id: categoryid.value,
      image_link: imglink.value
    })
  });
});