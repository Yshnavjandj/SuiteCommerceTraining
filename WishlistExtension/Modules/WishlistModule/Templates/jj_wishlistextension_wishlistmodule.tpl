<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

<div data-view="WishlistIconView">
  <span class="wishlist-icon">
    <i class="bi bi-three-dots" id="openPopup"></i>
  </span>
</div>
<div data-view="AddToProductList" class="product-details-full-actions-addtowishlist option-selection" data-action="add-to-wishlist"></div>

<div id="popup" class="popup">
  <div class="popup-content">
    <span class="close-popup" id="closePopup">&times;</span>
    <h2>Choose item:</h2>
    {{!-- <ul>
      {{#each matrixDetails}}
        <li>{{color}} : {{size}}</li>
      {{/each}}
    </ul> --}}
    <form id="matrix-options-form">
      {{#each matrixDetails}}
        <div class="matrix-option">
          <label>
            <input type="radio" name="matrixOption" value="{{id}}" />
            {{color}} : {{size}}
          </label>
        </div>
      {{/each}}
      <button type="submit">Submit</button>
    </form>
  </div>
</div>



<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->