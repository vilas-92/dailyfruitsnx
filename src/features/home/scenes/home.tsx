/* eslint-disable */
import React, { useState, useEffect } from "react"
import { observer } from "mobx-react"
import Contexts from "@df/library/stores"
import { useHistory } from "react-router-dom"

// var __html = require('./index.html');
// var template = { __html: __html };
// <div dangerouslySetInnerHTML={template} />

const Home = observer(() => {
  const history = useHistory()
  const rootStore = React.useContext(Contexts.rootStore)
  return (
    <>     
      <link rel="stylesheet" href="assets/css/vendor/jquery-ui.min.css" />
      <link rel="stylesheet" href="assets/css/vendor/fontawesome.css" />
      <link rel="stylesheet" href="assets/css/vendor/plaza-icon.css" />
      <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css" />

      <link rel="stylesheet" href="assets/css/plugin/slick.css" />
      <link rel="stylesheet" href="assets/css/plugin/material-scrolltop.css" />
      <link rel="stylesheet" href="assets/css/plugin/price_range_style.css" />
      <link rel="stylesheet" href="assets/css/plugin/in-number.css" />
      <link rel="stylesheet" href="assets/css/plugin/venobox.min.css" />
      <link rel="stylesheet" href="assets/css/plugin/jquery.lineProgressbar.css" />

      <link rel="stylesheet" href="assets/css/main.css" />
      <header>
        <div className="header__center sticky-header p-tb-10">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <div className="header__logo">
                  <a href="index.php" className="header__logo-link img-responsive">
                    <img
                      className="header__logo-img img-fluid"
                      src="assets/img/logo/logo.png"
                      alt=""
                    />
                  </a>
                </div>

                <div className="header-menu">
                  <nav>
                    <ul className="header__nav">
                      <li className="header__nav-item pos-relative">
                        <a href="/" className="header__nav-link">
                          Home
                        </a>
                      </li>

                      <li className="header__nav-item pos-relative">
                        <a href="#" className="header__nav-link">
                          Daily Fresh Fruits
                        </a>
                      </li>

                      <li className="header__nav-item pos-relative">
                        <a href="about.php" className="header__nav-link">
                          About Us{" "}
                        </a>
                      </li>

                      <li className="header__nav-item pos-relative">
                        <a href="contact.php" className="header__nav-link">
                          Contact Us
                        </a>
                      </li>

                      <li className="header__nav-item pos-relative">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.dailyfruites&hl=en"
                          target="_blank"
                          className="header__nav-link"
                        >
                          <img
                            src="assets/img/logo/android.png"
                            style={{ width: "120px" }}
                          />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <ul>
                  <li className="header__nav-item pos-relative">
                    <a
                      href="https://api.whatsapp.com/send?phone=+91 9967311336&text=Hi%21%20Dailyfruits%20."
                      target="_blank"
                    >
                      <i className="my-float">
                        <img src="assets/img/logo/whatsapp.png" />
                      </i>
                      +91 9967311336
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="main-container" className="main-container">
        <div className="hero slider-dot-fix slider-dot slider-dot-fix slider-dot--center slider-dot-size--medium slider-dot-circle  slider-dot-style--fill slider-dot-style--fill-white-active-green dot-gap__X--10">
          <div className="hero-slider">
            <img src="assets/img/hero/firstbanner.jpg" alt="" />
            <div className="hero__content">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-8">
                    <div className="hero__content--inner">
                      <h6 className="title__hero title__hero--tiny text-uppercase">
                        100% Healthy & Affordable
                      </h6>
                      <h1 className="title__hero title__hero--xlarge font--regular text-uppercase">
                        Organic <br /> Fruits
                      </h1>
                      <h4 className="title__hero title__hero--small font--regular">
                        Small Changes Big Difference
                      </h4>
                      <a
                        href="product-single-default.html"
                        className="btn btn--large btn--radius btn--black btn--black-hover-green font--bold text-uppercase"
                      >
                        Shop now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner m-t-30">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="banner__box">
                  <div className="banner__box--single banner__box--single-text-style-1 pos-relative">
                    <a href="product-single-default.html" className="banner__link">
                      <img
                        src="assets/img/banner/size-wide/pomegranate.jpg"
                        alt=""
                        className="banner__img"
                      />
                    </a>
                    <div className="banner__content banner__content--center pos-absolute">
                      <h6 className="banner__title  font--regular letter-spacing--4  text-center m-b-10">
                        Fresh Fruits
                      </h6>
                      <h2 className="banner__title banner__title--large font--medium letter-spacing--4  text-uppercase">
                        100% ORGANIC
                      </h2>
                      <h6 className="banner__title font--regular letter-spacing--4  text-center m-b-20">
                        Healthy Nutrition
                      </h6>
                      <div className="text-center">
                        <a
                          href="product-single-default.html"
                          className="btn btn--medium btn--radius btn--transparent btn--border-black btn--border-black-hover-green font--light text-uppercase"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="banner__box">
                  <div className="banner__box--single banner__box--single-text-style-1 pos-relative">
                    <a href="product-single-default.html" className="banner__link">
                      <img
                        src="assets/img/banner/size-wide/exotic.jpg"
                        alt=""
                        className="banner__img"
                      />
                    </a>
                    <div className="banner__content banner__content--center pos-absolute">
                      <h6 className="banner__title letter-spacing--4 font--regular text-center m-b-10">
                        Fresh Berry
                      </h6>
                      <h2 className="banner__title banner__title--large letter-spacing--4 font--medium text-uppercase">
                        Exotic
                      </h2>
                      <h6 className="banner__title letter-spacing--4 font--regular text-center m-b-20">
                        Healthy Food
                      </h6>
                      <div className="text-center">
                        <a
                          href="product-single-default.html"
                          className="btn btn--medium btn--radius btn--transparent btn--border-black btn--border-black-hover-green font--light text-uppercase"
                        >
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product m-t-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content section-content--border m-b-35">
                  <h5 className="section-content__title">Top categories</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product__catagory">
                  <div className="product__catagory--single">
                    <div className="product__content product__content--catagory">
                      <a
                        href="product-single-default.html"
                        className="product__link"
                      >
                        Fresh Seasonal Fruits{" "}
                      </a>
                      <span className="product__items--text"> </span>
                    </div>

                    <div className="product__img-box product__img-box--catagory">
                      <a
                        href="product-single-default.html"
                        className="product__img--link"
                      >
                        <img
                          className="product__img img-fluid"
                          src="assets/img/product/category/seasonalfruits.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>

                  <div className="product__catagory--single">
                    <div className="product__content product__content--catagory">
                      <a
                        href="product-single-default.html"
                        className="product__link"
                      >
                        Dry Fruits
                      </a>
                      <span className="product__items--text"></span>
                    </div>

                    <div className="product__img-box product__img-box--catagory">
                      <a
                        href="product-single-default.html"
                        className="product__img--link"
                      >
                        <img
                          className="product__img img-fluid"
                          src="assets/img/product/category/dryfruits.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>

                  <div className="product__catagory--single">
                    <div className="product__content product__content--catagory">
                      <a
                        href="product-single-default.html"
                        className="product__link"
                      >
                        Fresh Exotic Berries
                      </a>
                      <span className="product__items--text"></span>
                    </div>

                    <div className="product__img-box product__img-box--catagory">
                      <a
                        href="product-single-default.html"
                        className="product__img--link"
                      >
                        <img
                          className="product__img img-fluid"
                          src="assets/img/product/category/berries.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>

                  <div className="product__catagory--single">
                    <div className="product__content product__content--catagory">
                      <a
                        href="product-single-default.html"
                        className="product__link"
                      >
                        Fresh Exotic Fruits
                      </a>
                      <span className="product__items--text"></span>
                    </div>

                    <div className="product__img-box product__img-box--catagory">
                      <a
                        href="product-single-default.html"
                        className="product__img--link"
                      >
                        <img
                          className="product__img img-fluid"
                          src="assets/img/product/category/category-exotict.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>

                  <div className="product__catagory--single">
                    <div className="product__content product__content--catagory">
                      <a
                        href="product-single-default.html"
                        className="product__link"
                      >
                        Organic Citrus Fruits
                      </a>
                      <span className="product__items--text"></span>
                    </div>

                    <div className="product__img-box product__img-box--catagory">
                      <a
                        href="product-single-default.html"
                        className="product__img--link"
                      >
                        <img
                          className="product__img img-fluid"
                          src="assets/img/product/category/category-citrus.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner m-t-30">
          <div className="container-fluid">
            <div className="row" style={{marginLeft:'10%'}}>
              <div className="col-md-6 col-sm-12 ">
                <div className="banner__box" style={{ background: "black" }}>
                  <div className="banner__box--single banner__box--single-text-style-1 pos-relative">
                    <a href="product-single-default.html" className="banner__link">
                      <img
                        src="assets/img/banner/size-wide/scatch.png"
                        alt=""
                        className="banner__img,img-fluid"
                      />
                    </a>
                    <div className="banner__content banner__content--center pos-absolute">
                      <h2
                        className="banner__title  font--regular letter-spacing--4 text-uppercase   m-b-10"
                        style={{ color: "aliceblue" }}
                      >
                        FRESH FRUITS JUST <br /> A CLICK <br />
                        AWAY
                      </h2>

                      <h3
                        className="banner__title font--regular letter-spacing--4  text-center m-b-20"
                        style={{ color: "#f33d06" }}
                      >
                        Order fresh fruits on our app
                      </h3>
                      <div className="text-center">
                        <a
                          className="btn btn--green btn--radius btn--large text-uppercase"
                          href="#"
                        >
                          Download Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 ">
                <div className="banner__box">
                  <div className="banner__box--single banner__box--single-text-style-1 pos-relative">
                    <a href="product-single-default.html" className="banner__link">
                      <img
                        src="assets/img/banner/size-wide/screen-short.jpg"
                        alt=""
                        className="banner__img, img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* </div>  */}
        <div className="banner m-t-100 pos-relative">
          <div className="banner__bg">
            <img
              src="assets/img/banner/size-extra-large-wide/specialdiscount.jpg"
              alt=""
            />
          </div>
          <div className="banner__box banner__box--single-text-style-2">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="banner__content banner__content--center pos-absolute">
                    <h1 className="banner__title banner__title--large font--regular text-capitalize">
                      For all Fruits <br />
                      Products
                    </h1>
                    <h6 className="banner__title font--medium m-b-40">
                      Take now 10% off for all fruits.
                    </h6>
                    <a
                      href="product-single-default.html"
                      className="btn btn--large btn--radius btn--black btn--black-hover-green font--bold text-uppercase"
                    >
                      Shop now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product m-t-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content section-content--border m-b-35">
                  <h5 className="section-content__title">New Products</h5>
                  <a
                    href="shop-sidebar-grid-left.html"
                    className="btn btn--icon-left btn--small btn--radius btn--transparent btn--border-green btn--border-green-hover-green font--regular text-capitalize"
                  >
                    More Products<i className="fal fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 ">
                <div className="product__img-box  pos-relative">
                  <a
                    href="product-single-default.html"
                    className="product__img--link"
                  >
                    <img
                      className="product__img img-fluid"
                      src="assets/img/product/size-normal/blueberries.jpg"
                      alt=""
                    />
                  </a>

                  <span className="product__label product__label--sale-dis">
                    -24%
                  </span>
                </div>
              </div>

              <div className="col-3">
                <div className="product__img-box  pos-relative">
                  <a
                    href="product-single-default.html"
                    className="product__img--link"
                  >
                    <img
                      className="product__img img-fluid"
                      src="assets/img/product/size-normal/blackberries.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>

              <div className="col-3">
                <div className="product__img-box  pos-relative">
                  <a
                    href="product-single-default.html"
                    className="product__img--link"
                  >
                    <img
                      className="product__img img-fluid"
                      src="assets/img/product/size-normal/raspberries.jpg"
                      alt=""
                    />
                  </a>

                  <span className="product__label product__label--sale-dis">
                    -10%
                  </span>
                </div>
              </div>

              <div className="col-3">
                <div className="product__img-box  pos-relative">
                  <a
                    href="product-single-default.html"
                    className="product__img--link"
                  >
                    <img
                      className="product__img img-fluid"
                      src="assets/img/product/size-normal/mulberries.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog m-t-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-content section-content--border m-b-35">
                  <h5 className="section-content__title">Our Latest blog</h5>
                  <a
                    href="blog-list-sidebar-left.php"
                    className="btn btn--icon-left btn--small btn--radius btn--transparent btn--border-green btn--border-green-hover-green font--regular text-capitalize"
                  >
                    More blogs <i className="fal fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="blog-feed__img-box">
                  <a
                    href="Healthy-Winter-Season-Fruits.php"
                    className="blog-feed__img--link"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/blog/feed/blogwinter.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="blog-feed__content ">
                  <a
                    href="Healthy-Winter-Season-Fruits.php"
                    className="blog-feed__link"
                  >
                    Healthy Winter Season Fruits
                  </a>

                  <div className="blog-feed__post-meta">
                    By
                    <a
                      className="blog-feed__post-meta--link"
                      href="blog-grid-sidebar-left.php"
                    >
                      <span className="blog-feed__post-meta--author">
                        Partner 2021 /
                      </span>
                    </a>
                    <a
                      className="blog-feed__post-meta--link"
                      href="Healthy-Winter-Season-Fruits.php"
                    >
                      <span className="blog-feed__post-meta--date">
                        September 23, 2021
                      </span>
                    </a>
                  </div>
                  <p className="blog-feed__excerpt">
                    Here Are Winter Fruits That Should Be A Part Of Your Daily Diet
                    In Winter..
                  </p>
                  <a
                    href="Healthy-Winter-Season-Fruits.php"
                    className="btn btn--small btn--radius btn--green btn--green-hover-black font--regular text-uppercase text-capitalize"
                  >
                    Continue Reading
                  </a>
                </div>
              </div>

              <div className="col-4">
                <div className="blog-feed__img-box">
                  <a href="Benefits-of-fruits.php" className="blog-feed__img--link">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/feed/blog-dailyfruits.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="blog-feed__content ">
                  <a href="Benefits-of-fruits.php" className="blog-feed__link">
                    What are the benefits of fruit
                  </a>

                  <div className="blog-feed__post-meta">
                    By
                    <a
                      className="blog-feed__post-meta--link"
                      href="Benefits-of-fruits.php"
                    >
                      <span className="blog-feed__post-meta--author">
                        Partner 2021 /
                      </span>
                    </a>
                    <a
                      className="blog-feed__post-meta--link"
                      href="blog-grid-sidebar-left.php"
                    >
                      <span className="blog-feed__post-meta--date">
                        July 23, 2021
                      </span>
                    </a>
                  </div>
                  <p className="blog-feed__excerpt">What are benefits of fruits</p>
                  <a
                    href="Benefits-of-fruits.php"
                    className="btn btn--small btn--radius btn--green btn--green-hover-black font--regular text-uppercase text-capitalize"
                  >
                    Continue Reading
                  </a>
                </div>
              </div>

              <div className="col-4">
                <div className="blog-feed__img-box">
                  <a href="fruits-diet.php" className="blog-feed__img--link">
                    <img
                      className="img-fluid"
                      src="assets/img/blog/feed/fruits-diet.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="blog-feed__content ">
                  <a href="fruits-diet.php" className="blog-feed__link">
                    Fruits and vegetables is very important in our daily life.
                  </a>

                  <div className="blog-feed__post-meta">
                    By
                    <a
                      className="blog-feed__post-meta--link"
                      href="blog-grid-sidebar-left.php"
                    >
                      <span className="blog-feed__post-meta--author">
                        Partner 2021 /
                      </span>
                    </a>
                    <a
                      className="blog-feed__post-meta--link"
                      href="blog-grid-sidebar-left.php"
                    >
                      <span className="blog-feed__post-meta--date">
                        July 23, 2021
                      </span>
                    </a>
                  </div>
                  <p className="blog-feed__excerpt">
                    The presence of Fruits and vegetables is very important in our
                    daily life.
                  </p>
                  <a
                    href="fruits-diet.php"
                    className="btn btn--small btn--radius btn--green btn--green-hover-black font--regular text-uppercase text-capitalize"
                  >
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img src="assets/img/company-logo/anar.png" alt="" className="" />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img
                  src="assets/img/company-logo/green_apple.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img
                  src="assets/img/company-logo/apple-royal.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img
                  src="assets/img/company-logo/blueberries.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img
                  src="assets/img/company-logo/blackberry.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img
                  src="assets/img/company-logo/raspberry.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img
                  src="assets/img/company-logo/mulberry.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img
                  src="assets/img/company-logo/strwaberry.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img
                  src="assets/img/company-logo/passion_fruit.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img
                  src="assets/img/company-logo/imported_orange.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img src="assets/img/company-logo/dragon.png" alt="" className="" />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img
                  src="assets/img/company-logo/glob-grapes.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
            <div className="col-2 company-logo__item">
              <a href="#" className="company-logo__link">
                <img
                  src="assets/img/company-logo/grapefruit.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer m-t-100">
        <div className="container">
          <div className="footer__top">
            <div className="row">
              <div className="col-lg-4 col-md-5">
                <div className="footer__about">
                  <div className="footer__logo">
                    <a href="index.html" className="footer__logo-link">
                      <img
                        src="assets/img/logo/logo.png"
                        alt=""
                        className="footer__logo-img"
                      />
                    </a>
                  </div>
                  <ul className="footer__address">
                    <li className="footer__address-item">
                      <i className="fa fa-home"></i>Juhu, Mumbai
                    </li>
                    <li className="footer__address-item">
                      <i className="fa fa-phone-alt"></i>
                      <a href="tel:+91 9967311336"> +91 9967311336 </a>
                    </li>
                    <li className="footer__address-item">
                      <i className="fa fa-envelope"></i>
                      <a href="form-email:dailyfruits10@gmail.com">
                        {" "}
                        dailyfruits10@gmail.com{" "}
                      </a>{" "}
                    </li>
                  </ul>
                  <ul className="footer__social-nav">
                    <li className="footer__social-list">
                      <a
                        href="https://www.facebook.com/Dailyfruits-119542316116476"
                        className="footer__social-link"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="footer__social-list">
                      <a href="#" className="footer__social-link">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="footer__social-list">
                      <a
                        href="https://www.youtube.com/channel/UCATaVR7tIzaIDtUn0WtNvLA/featured"
                        className="footer__social-link"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="footer__menu">
                  <h4 className="footer__nav-title footer__nav-title--dash footer__nav-title--dash-red">
                    Category
                  </h4>
                  <ul className="footer__nav">
                    <li className="footer__list">
                      <a href="" className="footer__link">
                        Exotic Fruits
                      </a>
                    </li>
                    <li className="footer__list">
                      <a href="" className="footer__link">
                        Seasonal Fruits
                      </a>
                    </li>
                    <li className="footer__list">
                      <a href="" className="footer__link">
                        Frozen Berreis
                      </a>
                    </li>
                    <li className="footer__list">
                      <a href="" className="footer__link">
                        Fruits Gift Basket
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="footer__menu">
                  <h4 className="footer__nav-title footer__nav-title--dash footer__nav-title--dash-red">
                    Download our app
                  </h4>
                  <ul className="footer__nav">
                    <li className="footer__list">
                      {" "}
                      <a
                        href="https://play.google.com/store/apps/details?id=com.dailyfruites&hl=en"
                        target="_blank"
                        className="header__nav-link"
                      >
                        <img
                          src="assets/img/logo/android.png"
                          style={{ width: "200px" }}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-12">
                <div className="footer__copyright-text">
                  <p>
                    Copyright &copy; <a href="#">Dailyfruits</a>. All Rights Reserved
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="footer__payment">
                  <a href="#" className="footer__payment-link">
                    <img
                      src="assets/img/company-logo/payment.png"
                      alt=""
                      className="footer__payment-img"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
})

export default Home
