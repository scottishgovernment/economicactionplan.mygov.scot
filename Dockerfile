FROM jekyll/minimal:3.8.5
RUN \
  echo 'auth sufficient pam_shells.so' > /etc/pam.d/chsh && \
  chsh -s /bin/ash jekyll && \
  gem uninstall --force sass && \
  gem install -v 3.4.25 sass && \
  gem install -v 1.0.3 compass && \
  gem install -v 0.14.0 jekyll-redirect-from && \
  gem install -v 1.2.0 jekyll-sitemap
ENV PATH=/usr/gem/bin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
ENV GEM_PATH=/usr/gem
