import { DOMAIN } from "@config";
import axios from "axios";
import DomParser from "dom-parser";

const getProductsByGroup = async (group) => {
  try {
    const Get = await axios.get(`${DOMAIN.MIKROTIK}/products/group/${group}`);
    const parser = new DomParser();
    const dom = parser.parseFromString(Get.data);

    const body = dom.getElementsByTagName("body")[0];
    const productList = body.getElementsByClassName("productlist")[0];

    const result = productList
      .getElementsByClassName("product")
      .map((product, index) => {
        const images = product
          .getElementsByClassName("product-img")[0]
          .getElementsByTagName("img")[0]
          .getAttribute("data-src");
        const descriptions = product.getElementsByClassName(
          "product-description",
        );
        let title = "";
        let description = "";
        let links = "";
        descriptions.forEach((desc) => {
          links = `/public/mikrotik${desc
            .getElementsByTagName("a")[0]
            .getAttribute("href")}`;
          title = desc
            .getElementsByTagName("h2")[0]
            .getElementsByTagName("a")[0]
            .innerHTML.replace(/<[^>]*>NEW<[^>]*>/g, "");
          description = desc.getElementsByTagName("p")[0].innerHTML;
        });
        return {
          id: index,
          title,
          description,
          images,
          links,
        };
      });
    return result;
  } catch (error) {
    return error;
  }
};

export default getProductsByGroup;
