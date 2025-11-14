<!-- src/lib/components/footer.svelte -->
<script lang="ts">
  import { Facebook, Twitter, Instagram } from 'lucide-svelte';
</script>


<footer class="nonewnews-footer">
  <!------------------------------------------------------------------------>
  <!-- ... footer-top ... -->
  <!------------------------------------------------------------------------>
  <div class="footer-top">
    <div class="background-logo" aria-hidden="true">NoNewNews</div>

    <div class="links-section">
      <div class="link-column">
        <h3>Subscribe Now</h3>
        <ul>
          <li><a href="/">Digital Access</a></li>
          <li><a href="/">Home Delivery</a></li>
          <li><a href="/">Gift Subscription</a></li>
        </ul>
      </div>
      <div class="link-column">
        <h3>Account</h3>
        <ul>
          <li><a href="/">My Account</a></li>
          <li><a href="/">Manage Account</a></li>
          <li><a href="/">Help Center</a></li>
        </ul>
      </div>
      <div class="link-column">
        <h3>Contact</h3>
        <ul>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">Advertise</a></li>
          <li><a href="/">Careers</a></li>
        </ul>
      </div>
      <div class="link-column">
        <h3>More</h3>
        <ul>
          <li><a href="/">Newsletters</a></li>
          <li><a href="/">ePaper</a></li>
          <li><a href="/">Archives</a></li>
        </ul>
      </div>
    </div>
  </div>
  
  <!------------------------------------------------------------------------>
  <!-- ... footer-bottom ... -->
  <!------------------------------------------------------------------------>
  <div class="footer-bottom">
    <div class="social-media">
      <a href="/" aria-label="Facebook" class="social-icon"><Facebook size={20} /></a>
      <a href="/" aria-label="Twitter" class="social-icon"><Twitter size={20} /></a>
      <a href="/" aria-label="Instagram" class="social-icon"><Instagram size={20} /></a>
    </div>
    <div class="copyright">
      <p>&copy; 2024 NoNewNews Media Partners, LLC</p>
      <ul>
        <li><a href="/">Privacy Policy</a></li>
        <li><a href="/">Terms of Service</a></li>
      </ul>
    </div>
  </div>
</footer>


<style>
  .nonewnews-footer {
    background-color: #f8f9fa;
    font-family: "Times New Roman", Times, serif;
    padding: 0.75rem 2rem;
    border-top: 0.25rem double #333;
    color: #333;
    overflow: hidden;
  }
  .nonewnews-footer ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .nonewnews-footer a {
    text-decoration: none;
  }
  .nonewnews-footer a:hover {
    text-decoration: underline;
  }
  
  .footer-top {
    position: relative;
    padding: 0.5rem 0;
  }
  .footer-top::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -2rem;    /* Stretch the separator towards the sides */
    right: -2rem;   /* Stretch the separator towards the sides */
    height: 0.1rem;
    background-color: #e0e0e0;
  }
  .footer-bottom {
    padding-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .background-logo {
    transform: scale(2.1, 1.5);
    position: absolute;
    top: -1rem;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.05;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 8rem;
    color: #333;
  }

  .links-section {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
    padding: 0 4rem;
  }
  .link-column {
    text-align: center;
  }
  .link-column h3 {
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #000;
    margin: 0 0 0.5rem;
  }
  .link-column li {
    margin-bottom: 0.5rem;
  }
  .link-column a {
    color: #555;
  }
  
  .social-media {
    display: flex;
    gap: 1rem;
  }
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background-color: #e0e0e0;
    color: #333;
    border-radius: 50%;
    transition: background-color 0.2s;
  }
  .social-icon:hover {
    background-color: #ccc;
  }
  
  .copyright {
    font-size: 0.75rem;
    color: #666;
    text-align: right;
  }
  .copyright p {
    margin: 0 0 0.1rem;
  }
  .copyright ul {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }
</style>
