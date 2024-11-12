<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>

<div id="subscribe">
    <div>
        <p>Sign up to get new and exclusive offers to your inbox!</p>
    </div>
    <div class="subscribe-form">
        <form id="form">
            <input type="email" id="email" name="email" placeholder="username@domain" required>
            <button id="sub-button" form="form" type="submit">Subscribe <i class="fas fa-bell"></i></button>
        </form>
    </div>
    <div></div>
</div>

<div id="footer-details">
    <div class="contact-details">
        <p><i class="fas fa-phone-alt"></i>{{phone}}</p>
        <p><i class="fas fa-envelope"></i>{{email}}</p>
        <address>
            {{address}}
        </address>
        <img src="https://www.cricket.balajiwireless.com/SSP%20Applications/NetSuite%20Inc.%20-%20SCA%202019.1/Development/img/BALAJI.png">
    </div>

    <div class="footer-section footer-links">
        <div class="footer-h3">
            <h3>INFORMATION</h3>
        </div>
        <ul>
            {{#each quickLinks}}
            <li><a href="{{this.url}}">{{this.text}}</a></li>
            {{/each}}
        </ul>
    </div>

    <div class="footer-section footer-links">
        <div class="footer-h3">
            <h3>MY ACCOUNT</h3>
        </div>
        <ul>
            <li><a href="https://td2949364.secure.netsuite.com/c.TD2949364/ProDevs/ProDevSites/checkout.ssp?login=T&n=2&fragment=login-register#login-register">Sign In</a></li>
            <li><a href="https://td2949364.secure.netsuite.com/c.TD2949364/ProDevs/ProDevSites/checkout.ssp?login=T&n=2&fragment=login-register#login-register">Register</a></li>
            <li><a href="http://www.zenphoria.publicvm.com/#cart?whence=">View Cart</a></li>
            <li><a href="https://td2949364.secure.netsuite.com/c.TD2949364/ProDevs/ProDevSites/my_account.ssp?fragment=%2Fwishlist&n=2#/wishlist">My Account</a></li>
        </ul>
    </div>

    <div class="footer-section social-media">
        <div class="footer-h3">
            <h3>SOCIAL</h3>
        </div>
        <div class="social-icons">
            {{#each socialMediaLinks}}
            <a href="{{this.url}}"><i class="{{this.icon}}"></i></a>
            {{/each}}
        </div>
    </div>
</div>

<div id="balaji">
    <div class="footer-bottom">
        <p>&copy; Balaji Trading, Inc. 2023 All Rights Reserved.</p>
    </div>
</div>
