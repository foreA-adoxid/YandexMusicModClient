"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5403],
  {
    5403: function (e, t, a) {
      a.d(t, {
        config: function () {
          return d;
        },
      });
      var s = a(91525),
        n = a(14786),
        i = a(19327),
        c = a(68363),
        o = a(33551),
        r = a(52138),
        l = a(30518),
        u = a(88979);
      let d = () => {
        let e = "https://music-load-back-vla-1.music.yandex-team.ru";
        return (0, s.Z)((0, o.config)(), {
          resources: {
            musicExternalApi: {
              gateway: {
                prefixUrl: (0, l.s)(e),
                headers: { Host: "api.music.qa.yandex.ru" },
              },
              landing: {
                prefixUrl: (0, l.s)(
                  "http://music-landing-stress-music-landing-79.sas.yp-c.yandex.net:8080",
                ),
                headers: { Host: "api.music.yandex.ru" },
              },
              retryPolicyConfig: u.c,
              defaultTimeout: n.ys,
              timeouts: n.mZ,
            },
          },
          player: {
            overembed: !1,
            secretKey: (0, i.S)(),
            externalDomain: "localhost.music.yandex.ru",
            gateway: { prefixUrl: (0, l.s)(e) },
          },
          dev: { panel: !0 },
          tvm: {
            tvmtoolAuthToken: "00000000000000000000000000000000",
            host: "http://localhost:8001",
          },
          passportCredentials: {
            host: "https://passport.yandex.".concat(c.M),
            origin: "music",
          },
          blackbox: {
            host: "http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox",
          },
          oldWebHost: "music.qa.yandex.".concat(c.M),
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
