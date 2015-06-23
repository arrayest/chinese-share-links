import Sharing from 'discourse/lib/sharing';
    /*
    ```javascript
    Sharing.addSource({

      // This id must be present in the `share_links` site setting too
      id: 'twitter',

      // The icon that will be displayed, choose between font awesome class name `faIcon` and custom HTML `htmlIcon`.
      // When both provided, prefer `faIcon`
      faIcon: 'fa-twitter-square',
      htmlIcon: '<img src="example.com/example.jpg">',

      // A callback for generating the remote link from the `link` and `title`
      generateUrl: function(link, title) {
        return "http://twitter.com/intent/tweet?url=" + encodeURIComponent(link) + "&text=" + encodeURIComponent(title);
      },

      // If true, opens in a popup of `popupHeight` size. If false it's opened in a new tab
      shouldOpenInPopup: true,
      popupHeight: 265
    });
    ```
    */

    Sharing.addSource({
      id: 'weibo',
      faIcon: 'fa-weibo',
      generateUrl: function(link, title) {
        return ("http://service.weibo.com/share/share.php?url=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title));
      },
      shouldOpenInPopup: true,
      popupHeight: 370
    });

    Sharing.addSource({
      id: 'renren',
      faIcon: 'fa-renren',
      generateUrl: function(link, title) {
        return ("http://widget.renren.com/dialog/share?resourceUrl=" + encodeURIComponent(link) + "&title=" + encodeURIComponent(title) + "&description=" + encodeURIComponent(title));
      },
      shouldOpenInPopup: true,
      popupHeight: 628
    });

    Sharing.addSource({
      id: 'wechat',
      faIcon: 'fa-wechat',
      generateUrl: function(link) {
        return ("http://s.jiathis.com/qrcode.php?url=" + encodeURIComponent(link));
      },
      shouldOpenInPopup: true,
      popupHeight: 200
    });

var _sources = {};

export default {
  addSource(source) {
    _sources[source.id] = source;
  },

  activeSources(linksSetting) {
    return linksSetting.split('|').map(s => _sources[s]).compact();
  }
};
