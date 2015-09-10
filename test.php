<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
echo strlen(file_get_contents("http://www.apple.com/hk/shop/buy-iphone/iphone6s/4.7-inch-display-64gb-rose-gold"));
/*
<div class="as-purchaseinfo-button">
                



<form method="get" action="#" data-feature-name="Step1" data-display-name="AOS: home/shop_iphone/family/iphone6" data-evar20="AOS: home/shop_iphone/family/iphone6 | MG4H2 | Availability | 24 | 1 business day" data-part-number="MG4H2ZP/A">

    

        <div class="as-purchaseinfo-button">

<span class="add-to-cart ">



<button type="submit" class="button as-button-large as-button-block" name="add-to-cart" value="add-to-cart" title="Add to Bag">
        <span class="label">Add to Bag</span>
</button>
</span>         </div>

        <input name="product" type="hidden" disabled="disabled" value="" id="productPartNumber">




        <input type="hidden" name="product" value="MG4H2ZP/A">
        <input type="hidden" name="step" value="select">
</form>
                    </div>
                    */
/*
<div class="as-purchaseinfo-button">
            
                
                    
                        <button class="button as-button-large as-button-block as-button-isdisabled" type="button" disabled="disabled">
                            Select
                        </button>
                
        </div>
        */
?>