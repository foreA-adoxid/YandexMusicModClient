"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1918],
  {
    51155: function (e, t, a) {
      a.d(t, {
        config: function () {
          return l;
        },
      });
      var s = a(91525),
        n = a(14786),
        i = a(19327),
        c = a(68363),
        r = a(33551),
        u = a(52138),
        o = a(30518),
        f = a(88979);
      let l = () =>
        (0, s.Z)((0, r.config)(), {
          resources: {
            musicExternalApi: {
              gateway: {
                prefixUrl: (0, o.s)("https://api.music.qa.yandex.".concat(c.M)),
              },
              retryPolicyConfig: f.c,
              defaultTimeout: n.ys,
              timeouts: n.mZ,
            },
          },
          player: {
            overembed: !1,
            secretKey: (0, i.S)(),
            externalDomain: "next.qa.music.yandex.ru",
            gateway: {
              prefixUrl: (0, o.s)("https://api.music.qa.yandex.".concat(c.M)),
            },
          },
          dev: { panel: !0 },
          oldWebHost: "music.qa.yandex.".concat(c.M),
          afisha: {
            clientId: (0, u.$)(),
            host: "https://widget.afisha.tst.yandex.ru",
          },
          features: { nonMusic: !1 },
        });
    },
  },
]);
