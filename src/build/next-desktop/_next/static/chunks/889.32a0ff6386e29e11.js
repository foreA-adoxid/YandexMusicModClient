"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [889],
  {
    10889: function (t, e, a) {
      a.d(e, {
        config: function () {
          return d;
        },
      });
      var s = a(91525),
        c = a(14786),
        n = a(19327),
        o = a(68363),
        i = a(33551),
        r = a(52138),
        l = a(30518),
        u = a(88979),
        p = a(21535);
      let d = () => {
        let t = p.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND
          ? "https://api.music.yandex.".concat(o.M)
          : "https://api.music.qa.yandex.".concat(o.M);
        return (0, s.Z)((0, i.config)(), {
          resources: {
            musicExternalApi: {
              gateway: { prefixUrl: (0, l.s)(t) },
              retryPolicyConfig: u.c,
              defaultTimeout: c.ys,
              timeouts: c.mZ,
            },
          },
          player: {
            overembed: !1,
            secretKey: (0, n.S)(),
            externalDomain: "localhost.music.yandex.ru",
            gateway: { prefixUrl: t },
          },
          dev: { panel: !0 },
          tvm: {
            tvmtoolAuthToken: "00000000000000000000000000000000",
            host: "http://localhost:8001",
          },
          passportCredentials: {
            host: "https://passport.yandex.".concat(o.M),
            origin: "music_desktop",
          },
          blackbox: {
            host: "http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox",
          },
          oldWebHost: p.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND
            ? "music.yandex.".concat(o.M)
            : "music.qa.yandex.".concat(o.M),
          afisha: {
            clientId: (0, r.$)(),
            host: "https://widget.afisha.yandex.ru",
          },
          features: { nonMusic: !1 },
        });
      };
    },
  },
]);
