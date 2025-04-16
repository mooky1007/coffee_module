(() => {
  // node_modules/dom_craft/dist/dom_craft.esm.js
  var t = class {
    constructor() {
    }
    static qs(t2) {
      return new e(document.querySelector(t2));
    }
    static qsa(t2) {
      return document.querySelectorAll(t2);
    }
    static el(t2) {
      return new e(document.createElement(t2));
    }
    static get presets() {
      return { ani: { fadeIn: [{ opacity: 0 }, { opacity: 1 }], fadeOut: [{ opacity: 1 }, { opacity: 0 }], slideUp: [{ transform: "translateY(10px)" }, { transform: "translateY(0)" }], slideDown: [{ transform: "translateY(-10px)" }, { transform: "translateY(0)" }] } };
    }
    static get body() {
      return new e(document.querySelector("body"));
    }
    static inView(t2) {
      const e2 = new IntersectionObserver(([t3]) => {
        t3.isIntersecting ? t3.target.in && t3.target.in() : t3.target.out && t3.target.out();
      }, { threshold: t2 || 0.2 });
      return e2.watch = (t3) => {
        t3.in && (t3.el.in = t3.in), t3.out && (t3.el.out = t3.out), e2.observe(t3.el);
      }, e2;
    }
    static state(t2) {
      let e2 = t2;
      const r = /* @__PURE__ */ new Set(), n = () => e2;
      return n.sub = (t3) => r.add(t3), n.unsub = (t3) => r.delete(t3), [n, (t3) => {
        e2 = t3, r.forEach((t4) => t4());
      }];
    }
    static effect(t2, e2) {
      e2.forEach((e3) => e3.sub(t2)), t2();
    }
    static delay(t2) {
      return new Promise((e2) => {
        setTimeout(() => e2(), t2);
      });
    }
    static injectCss(t2) {
      const e2 = document.createElement("style");
      e2.textContent = t2, document.head.append(e2);
    }
    static get span() {
      return new e("span");
    }
    static get table() {
      return new e("table");
    }
    static get thead() {
      return new e("thead");
    }
    static get tbody() {
      return new e("tbody");
    }
    static get tfoot() {
      return new e("tfoot");
    }
    static get tr() {
      return new e("tr");
    }
    static get th() {
      return new e("th");
    }
    static get td() {
      return new e("td");
    }
    static get p() {
      return new e("p");
    }
    static get i() {
      return new e("i");
    }
    static get label() {
      return new e("label");
    }
    static get h1() {
      return new e("h1");
    }
    static get h2() {
      return new e("h2");
    }
    static get h3() {
      return new e("h3");
    }
    static get h4() {
      return new e("h4");
    }
    static get h5() {
      return new e("h5");
    }
    static get h6() {
      return new e("h6");
    }
    static get div() {
      return new e("div");
    }
    static get img() {
      return new e("img");
    }
    static get section() {
      return new e("section");
    }
    static get article() {
      return new e("article");
    }
    static get figure() {
      return new e("figure");
    }
    static get header() {
      return new e("header");
    }
    static get nav() {
      return new e("nav");
    }
    static get aside() {
      return new e("aside");
    }
    static get footer() {
      return new e("footer");
    }
    static get main() {
      return new e("main");
    }
    static get ol() {
      return new e("ol");
    }
    static get ul() {
      return new e("ul");
    }
    static get button() {
      return new e("button");
    }
    static get input() {
      return new e("input");
    }
    static get select() {
      return new e("select");
    }
    static get legend() {
      return new e("legend");
    }
    static get textarea() {
      return new e("textarea");
    }
    static get fieldset() {
      return new e("fieldset");
    }
    static get option() {
      return new e("option");
    }
    static get form() {
      return new e("form");
    }
    static get li() {
      return new e("li");
    }
    static get a() {
      return new e("a");
    }
  };
  var e = class _e {
    constructor(t2) {
      this.el = "string" == typeof t2 ? document.createElement(t2) : t2;
    }
    set(t2 = {}) {
      return this.config = t2, "string" == typeof t2 ? this.text(t2) : Object.entries(t2).forEach(([t3, e2]) => {
        t3 in this ? this[t3](e2) : this[t3] = e2;
      }), this;
    }
    get value() {
      return this.el.value;
    }
    set value(t2) {
      this.el.value = t2;
    }
    id(t2) {
      return this.el.id = t2, this;
    }
    text(t2) {
      return this.el.textContent = t2, this;
    }
    html(t2) {
      return this.el.innerHTML = t2, this;
    }
    placeholder(t2) {
      return this.el.placeholder = t2, this;
    }
    type(t2) {
      return this.el.type = t2, this;
    }
    src(t2) {
      return this.el.src = t2, this;
    }
    href(t2) {
      return this.el.href = t2, this;
    }
    class(t2) {
      return 1 === t2.split(" ").length ? this.el.classList.add(t2) : t2.split(" ").forEach((t3) => {
        this.el.classList.add(t3.trim());
      }), this;
    }
    attr(t2) {
      return Object.entries(t2).forEach(([t3, e2]) => {
        this.el.setAttribute(t3, e2);
      }), this;
    }
    style(t2) {
      return Object.entries(t2).forEach(([t3, e2]) => this.el.style[t3] = e2), this;
    }
    dataset(t2) {
      return Object.entries(t2).forEach(([t3, e2]) => {
        this.el.dataset[t3] = e2;
      }), this;
    }
    animations(t2) {
      if (Array.isArray(t2)) t2.forEach((t3) => {
        const { keyframe: e2, options: r } = t3;
        this.animate(e2, r);
      });
      else {
        const { keyframe: e2, options: r } = t2;
        this.animate(e2, r);
      }
      return this;
    }
    animate(t2, e2) {
      return this.ani = this.el.animate(t2, e2), this.ani.pause(), this.ani;
    }
    children(t2, r = true) {
      return Array.isArray(t2) || (t2 = [t2]), t2.forEach(async (t3) => {
        if (t3 instanceof _e && (r ? this.el.append(t3.el) : this.el.prepend(t3.el), t3.introAnimation)) {
          const { keyframe: e2, options: r2 } = t3.introAnimation;
          t3.el.animate(e2, r2);
        }
      }), this;
    }
    on(t2) {
      return Object.entries(t2).forEach(([t3, e2]) => {
        "animationEnd" !== t3 ? this.el.addEventListener(t3, e2.bind(this)) : this.onAnimationEnd = e2;
      }), this;
    }
    async remove() {
      if (this.outroAnimation) {
        const { keyframe: t2, options: e2 } = this.outroAnimation;
        return await this.el.animate(t2, e2).finished, this.el.remove();
      }
      return this.el.remove();
    }
    replace(t2) {
      this.el.innerHTML = "", this.children(t2);
    }
    append(t2) {
      this.children(t2);
    }
    removeClass(t2) {
      this.el.classList.remove(t2);
    }
    prepend(t2) {
      this.children(t2, false);
    }
  };

  // src/js/lib/_state.js
  var [filter, setFilter] = t.state([]);
  var [machine, setMachine] = t.state("\uBC84\uCE04\uC624");
  var machineData = ["\uBC84\uCE04\uC624", "\uC624\uB9AC\uC9C0\uB110"];
  var filterData = [
    {
      key: "decaf",
      name: "\uB514\uCE74\uD398\uC778",
      color: "#94473C99"
    },
    {
      key: "ice",
      name: "\uC544\uC774\uC2A4",
      color: "#4BADD199"
    },
    {
      key: "milk",
      name: "\uBC00\uD06C",
      color: "#D3AB8999"
    },
    {
      key: "starbucks",
      name: "\uC2A4\uD0C0\uBC85\uC2A4",
      color: "#0D624399"
    }
  ];
  var areaInfor = {
    all: {
      text: "\uB2F9\uC2E0\uC758 \uCDE8\uD5A5\uC5D0 \uB9DE\uB294 <br>\uC601\uC5ED\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694.",
      style: { transition: "0.5s", transform: "scale(1) translate(0,0)" }
    },
    quadrant_1: {
      text: `\uB2F9\uC2E0\uC740 <strong style="color:#e68658aa;">\uBD80\uB4DC\uB7FD\uACE0 \uACE0\uC18C\uD55C</strong> \uCEE4\uD53C\uB97C <br>\uC88B\uC544\uD558\uB294 <strong style="color:#e68658;">"\uC74C\uC720\uC2DC\uC778"</strong>\uC785\uB2C8\uB2E4.`,
      style: { transition: "0.5s", transform: "scale(1.8) translate(22%, 22%)" }
    },
    quadrant_2: {
      text: `\uB2F9\uC2E0\uC740 <strong style="color:#68b3a7aa;">\uBD80\uB4DC\uB7FD\uACE0 \uC0B0\uB73B\uD55C</strong> \uCEE4\uD53C\uB97C <br>\uC88B\uC544\uD558\uB294 <strong style="color:#68b3a7;">"\uB85C\uB9E8\uD2F0\uC2A4\uD2B8"</strong>\uC785\uB2C8\uB2E4.`,
      style: { transition: "0.5s", transform: "scale(1.8) translate(-22%, 22%)" }
    },
    quadrant_3: {
      text: `\uB2F9\uC2E0\uC740 <strong style="color:#687ba2aa;">\uAC15\uB82C\uD558\uACE0 \uC0B0\uB73B\uD55C</strong> \uCEE4\uD53C\uB97C <br>\uC88B\uC544\uD558\uB294 <strong style="color:#687ba2;">"\uC790\uC5F0\uC778"</strong>\uC785\uB2C8\uB2E4.`,
      style: { transition: "0.5s", transform: "scale(1.8) translate(-22%, -22%)" }
    },
    quadrant_4: {
      text: `\uB2F9\uC2E0\uC740 <strong style="color:#a26868aa;">\uAC15\uB82C\uD558\uACE0 \uACE0\uC18C\uD55C</strong> \uCEE4\uD53C\uB97C <br>\uC88B\uC544\uD558\uB294 <strong style="color:#a26868;">"\uBAA8\uD5D8\uAC00"</strong>\uC785\uB2C8\uB2E4.`,
      style: { transition: "0.5s", transform: "scale(1.8) translate(22%, -22%)" }
    }
  };
  var quadrants = [1, 2, 3, 4];
  var [selectedQuadrant, setSelectedQuadrant] = t.state("all");
  var coffeeData = [
    {
      top: 3,
      left: -2,
      name: "\uCEE4\uD53CA",
      filter: ["ice"]
    },
    {
      top: 1,
      left: 1,
      name: "\uCEE4\uD53CB"
    },
    {
      top: 2,
      left: 2,
      name: "\uCEE4\uD53CC",
      filter: ["decaf"]
    },
    {
      top: -1,
      left: -2,
      name: "\uCEE4\uD53CD",
      filter: ["decaf", "milk"]
    },
    {
      top: -2,
      left: -1,
      name: "\uCEE4\uD53CE",
      filter: ["milk"]
    },
    {
      top: -3.5,
      left: 2,
      name: "\uCEE4\uD53CF",
      filter: ["starbucks"]
    }
  ];

  // src/js/components/Filter/Filter.js
  var filterButton = (data) => {
    return t.li.set({
      class: `filter_list_item_${data.color.replace("#", "")}`,
      children: [
        t.label.set({
          attr: {
            for: data.key
          },
          children: [
            t.input.set({
              type: "checkbox",
              id: data.key,
              on: {
                change: function() {
                  const filterData2 = filter();
                  if (this.el.checked) {
                    setFilter([...filterData2, data]);
                  } else {
                    setFilter([
                      ...filterData2.filter((el) => {
                        return el.key !== data.key;
                      })
                    ]);
                  }
                }
              }
            }),
            t.span,
            t.p.set(data.name)
          ]
        })
      ]
    });
  };
  t.injectCss(`
  ${filterData.map((data) => {
    return `
          .filter_list_item_${data.color.replace("#", "")}:has(input:checked) {
            border-color: ${data.color} !important;
          }

          .filter_list_item_${data.color.replace("#", "")}:has(input:checked) input:checked + span {
            border-color: ${data.color} !important;
          }

          .filter_list_item_${data.color.replace("#", "")}:has(input:checked) input:checked + span::after {
            background: ${data.color} !important;
          }
          `;
  }).join(`
`)}
`);
  var [filterFold, setFilterFold] = t.state(false);
  var FilterHeader = t.div.set({
    class: "filter_header",
    on: {
      click: function() {
        setFilterFold(!filterFold());
      }
    },
    children: [
      t.h3.set({
        text: "\uCD94\uAC00 \uCDE8\uD5A5 \uBC0F \uAE30\uD638 \uC120\uD0DD"
      }),
      t.div.set({
        children: [t.span.class("arrow")]
      })
    ]
  });
  var FilterBody = t.ul.set({
    class: "filter_section",
    children: filterData.map((data) => filterButton(data))
  });
  var Filter = [FilterHeader, FilterBody];
  Filter.reset = () => {
    setFilter([]);
    FilterBody.config.children.forEach((li) => {
      li.config.children[0].config.children[0].el.checked = false;
    });
  };
  var Filter_default = Filter;

  // src/js/components/QuadrantsTitle/QuadrantsTitle.js
  var Title = t.h2;
  var QuadrantsTitle = t.ul.set({
    children: [
      Title.set({
        html: areaInfor[selectedQuadrant()].text
      }),
      t.button.set({
        children: [t.span.set("\u23CE")],
        on: {
          click: () => {
            if (selectedQuadrant() !== "all") setSelectedQuadrant("all");
          }
        }
      })
    ],
    update: async () => {
      const animation = await Title.animate(
        [
          {
            opacity: 0,
            transform: "translateY(10px)"
          },
          {
            opacity: 1,
            transform: "translateY(0)"
          }
        ],
        {
          duration: 600,
          fill: "forwards"
        }
      );
      animation.cancel();
      Title.set({
        html: areaInfor[selectedQuadrant()].text
      });
      animation.play();
    }
  });
  var QuadrantsTitle_default = QuadrantsTitle;

  // src/js/components/MachineSelector/MachineSelector.js
  var MachineItems = machineData.map((el) => {
    const Button = t.button;
    return t.li.set({
      children: [
        Button.set({
          text: el,
          on: {
            click: function() {
              if (machine() !== el) setMachine(el);
            }
          }
        })
      ],
      update: () => {
        if (machine() === el) Button.class("active");
        else Button.removeClass("active");
      }
    });
  });
  var MachineSelector_default = MachineItems;

  // src/js/components/QuadrantsArea/QuadrantsArea.js
  var QuadrantsAreaItem = (idx) => {
    return t.div.set({
      class: `num0${idx}`,
      on: {
        click: () => {
          if (selectedQuadrant() !== `quadrant_${idx}`) {
            setSelectedQuadrant(`quadrant_${idx}`);
          }
        }
      }
    });
  };
  var clickableArea = t.div;
  var QuadrantsArea = t.section.set({
    class: "coffee_draft",
    children: [
      t.span.set({ class: "top", text: "\uBD80\uB4DC\uB7EC\uC6B4" }),
      t.span.set({ class: "right", text: "\uC0B0\uB73B\uD55C" }),
      t.span.set({ class: "bottom", text: "\uAC15\uB82C\uD55C" }),
      t.span.set({ class: "left", text: "\uACE0\uC18C\uD55C" }),
      clickableArea.set({
        class: "clickable_section",
        children: quadrants.map((idx) => {
          return QuadrantsAreaItem(idx);
        })
      })
    ],
    update: function() {
      this.style(areaInfor[selectedQuadrant()].style);
    }
  });
  var QuadrantsArea_default = QuadrantsArea;

  // src/js/components/QuadrantsFilter/QuadrantsFilter.js
  var filterDom = {};
  filterData.forEach((el) => {
    filterDom[el.name] = t.li;
    filterDom[el.name].animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 300,
      fill: "forwards"
    }), filterDom[el.name].set({
      style: {
        background: el.color
      },
      children: [t.span.set(`#${el.name}`)]
    });
  });
  var prevFilter = [];
  var QuadrantsFilter = t.ul.set({
    class: "selected_filter",
    update: function() {
      this.replace(
        filter().map((el) => {
          if (filterDom[el.name]) {
            if (prevFilter.find((el2) => el2.name === el.name)) return filterDom[el.name];
            filterDom[el.name].ani.play();
            return filterDom[el.name];
          }
        })
      );
      prevFilter = filter();
    }
  });
  var QuadrantsFilter_default = QuadrantsFilter;

  // src/js/components/QuadrantsItem/QuadrantsItem.js
  var QuadrantsItem = (data) => {
    const Article = t.article;
    Article.set({
      class: "quadrants_item",
      style: {
        top: `${50 + data.top * -10}%`,
        left: `${50 + data.left * 10}%`
      },
      children: [t.div, t.span.set(data.name)]
    });
    return Article;
  };
  var QuadrantsItem_default = QuadrantsItem;

  // src/js/lib/_utils.js
  var scrollTo = (target, position = "top") => {
    window.scrollTo({
      top: target.el.getBoundingClientRect()[position] + window.pageYOffset - (position === "bottom" ? window.innerHeight : 0),
      behavior: "smooth"
    });
  };

  // src/js/main.js
  window.addEventListener("DOMContentLoaded", () => {
    const MachineWrap = t.qs("[data-js=machine]");
    const TitleWrap = t.qs("[data-js=quadrants_header]");
    const QuadrantsWrap = t.qs("[data-js=quadrants_body]");
    const FilterWrap = t.qs("[data-js=filter]");
    const QuadrantsItemContainer = t.section.style({
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0
    });
    QuadrantsItemContainer.update = function() {
      this.replace(
        coffeeData.filter((data) => {
          if (filter().length === 0) return true;
          else if ("filter" in data) {
            return data.filter.some((el) => {
              return filter().find((filterData2) => filterData2.key === el);
            });
          } else {
            return false;
          }
        }).map((el) => QuadrantsItem_default(el))
      );
    };
    MachineWrap.replace(MachineSelector_default);
    TitleWrap.replace([QuadrantsTitle_default, QuadrantsFilter_default]);
    FilterWrap.replace(Filter_default);
    QuadrantsWrap.append(QuadrantsArea_default);
    QuadrantsArea_default.append(QuadrantsItemContainer);
    t.effect(() => {
      if (filterFold()) FilterWrap.class("fold");
      else FilterWrap.removeClass("fold");
    }, [filterFold]);
    QuadrantsWrap.reset = () => {
    };
    QuadrantsWrap.update = () => {
      QuadrantsWrap.dataset({
        selected: selectedQuadrant()
      });
      QuadrantsTitle_default.update();
      QuadrantsArea_default.update();
    };
    QuadrantsWrap.mode = t.state("all");
    const [quadrantsMode, setQuadrantsMode] = QuadrantsWrap.mode;
    t.effect(() => {
      if (quadrantsMode() === "all") {
        TitleWrap.removeClass("scale_up");
        QuadrantsArea_default.removeClass("scale_up");
      } else {
        TitleWrap.class("scale_up");
        QuadrantsArea_default.class("scale_up");
      }
    }, [quadrantsMode]);
    t.effect(() => {
      QuadrantsFilter_default.update();
      QuadrantsItemContainer.update();
      if (filter().length !== 0) scrollTo(FilterWrap, "bottom");
    }, [filter]);
    t.effect(() => {
      setQuadrantsMode(selectedQuadrant());
      QuadrantsWrap.update();
      if (selectedQuadrant() !== "all") scrollTo(TitleWrap);
    }, [selectedQuadrant]);
    let firstInit = true;
    t.effect(async () => {
      MachineSelector_default.forEach((button) => button.update());
      Filter_default.reset();
      await t.delay(200);
      if (selectedQuadrant() !== "all") setSelectedQuadrant("all");
      if (!firstInit) scrollTo(TitleWrap);
      else firstInit = false;
    }, [machine]);
  });
})();
