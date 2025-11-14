<!-- src/lib/components/footer.svelte -->
<script lang="ts">
  import { Facebook, Twitter, Instagram } from 'lucide-svelte';
</script>

<footer class="nonewnews-footer">
  <!------------------------------------------------------------------------>
  <!-- ... footer-top ... -->
  <!------------------------------------------------------------------------>
  <div class="footer-top">
    <svg class="background-logo" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">NoNewNews</text>
    </svg>

    <div class="links-section">
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
    padding: 40px 60px;
    border-top: 4px double #333;
    overflow: hidden;
    color: #333;
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
    padding-bottom: 30px;
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 20px;
  }
  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }

  .background-logo {
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 0.05;
    pointer-events: none;
  }
  .background-logo text {
    font-family: inherit;
    font-weight: bold;
    font-size: 100px;
    fill: #333;
  }

  .links-section {
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  }
  .link-column {
    text-align: center;
  }
  .link-column h3 {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: uppercase;
    color: #000;
  }
  .link-column li {
    margin-bottom: 10px;
  }
  .link-column a {
    color: #555;
    font-size: 14px;
  }
  
  .social-media {
    display: flex;
    gap: 10px;
  }
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: #e0e0e0;
    color: #333;
    border-radius: 50%;
    transition: background-color 0.2s;
  }
  .social-icon:hover {
    background-color: #ccc;
  }
  
  .copyright {
    font-size: 12px;
    color: #666;
    text-align: right;
  }
  .copyright p {
    margin: 0 0 5px 0;
  }
  .copyright ul {
    display: flex;
    gap: 15px;
    justify-content: flex-end;
  }
  .copyright a {
    color: #666;
  }
</style>
