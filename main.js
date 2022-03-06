<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>IS322 Project 1</title>


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="main.css">
</head>
<body>
    <div class="container">
        <h2 class="text-center"> E-Commerce Store</h2>

        <div class="'filter-container">
            <select id="published">
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
        </div>

        <div class="card" style="width: 18rem;">
                  <img src="{{ product.image.url}}" class="card-img-top" alt="SKU #">
                    <div class="card-body">
                    <h5 class="card-title">Product</h5>
                     <p class="card-text">Description</p>
                      <a href="/cart" class="btn btn-primary">Add to Basket</a>
                  </div>

        <div class="filter-contanier">
            <!-- TODO: Add Filter Elements -->
        </div>

        <div id="products"></div>
    </div>
    <script src="main.js">
    </script>
</body>
</html>
