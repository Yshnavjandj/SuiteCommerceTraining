<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

<div data-view="WishlistIconView">
  <span class="wishlist-icon" id="toggleWishlistStatus">
    {{#if isInWishlist}}
    <span><i class="bi bi-suit-heart-fill"></i></span>
    {{else}}
    <span><i class="bi bi-suit-heart"></i></span>
    {{/if}}
  </span>
</div>



{{!-- <div data-view="WishlistIconView">
    <h1>Hi</h1>
</div> --}}



<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->