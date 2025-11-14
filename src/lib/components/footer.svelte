<!-- src/lib/components/footer.svelte -->
<script lang="ts">
  import { Facebook, Twitter, Instagram } from 'lucide-svelte';
</script>

<footer class="nonewnews-footer">
  <div class="footer-top-area">
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

  <div class="footer-bottom">
    <div class="social-media">
      <a href="/" aria-label="Facebook"><Facebook size={20} /></a>
      <a href="/" aria-label="Twitter"><Twitter size={20} /></a>
      <a href="/" aria-label="Instagram"><Instagram size={20} /></a>
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
</style>
