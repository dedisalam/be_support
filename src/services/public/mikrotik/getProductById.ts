import { DOMAIN } from "@config";
import axios from "axios";
import DomParser from "dom-parser";

const getProductById = async (id) => {
  try {
    const link = `${DOMAIN.MIKROTIK}/product/${id}`;
    const Get = await axios.get(link);
    const parser = new DomParser();
    const dom = parser.parseFromString(Get.data);

    const body = dom.getElementsByTagName("body")[0];
    const specifications = body.getElementById("specifications");
    const titles = specifications.getElementsByTagName("h2");

    const result = titles
      .map((h2, index) => {
        const title = h2.innerHTML
          .replace(/\s+$/, "")
          .toLowerCase()
          .replace(/\s+/g, "_");
        const value = {};
        if (
          specifications.getElementsByClassName("product-table")[index] !==
          undefined
        ) {
          const ProductTable =
            specifications.getElementsByClassName("product-table")[index];
          if (ProductTable.getElementsByTagName("tbody")[0] !== undefined) {
            const Tbody = ProductTable.getElementsByTagName("tbody")[0];
            Tbody.getElementsByTagName("tr").forEach((tr) => {
              const td = tr.getElementsByTagName("td");
              if (tr.getElementsByTagName("td").length === 2) {
                let value2 = "";
                const value1 = tr
                  .getElementsByTagName("td")[0]
                  .innerHTML.replace(/\s+$/, "")
                  .toLowerCase()
                  .replace(/\s+/g, "_");
                value2 = tr
                  .getElementsByTagName("td")[1]
                  .innerHTML.replace(/\s+$/, "");
                if (
                  tr.getElementsByTagName("td")[1].getElementsByTagName("a")
                    .length === 1
                ) {
                  const a = tr
                    .getElementsByTagName("td")[1]
                    .getElementsByTagName("a")[0];
                  value2 = a.innerHTML.replace(/\s+$/, "");
                }
                Object.assign(value, {
                  [value1]: value2,
                });
              } else {
                td.forEach((t) => {
                  Object.assign(value, {
                    td: [t.innerHTML.replace(/\s+$/, "")],
                  });
                });
              }
            });
          } else {
            const Trs = ProductTable.getElementsByTagName("tr");
            Trs.forEach((tr) => {
              if (tr.getElementsByTagName("td")[0] !== undefined) {
                const tds = tr.getElementsByTagName("td");
                tds.forEach((td) => {
                  Object.assign(value, {
                    td: [td.innerHTML.replace(/\s+$/, "")],
                  });
                });
              }
            });
          }
          return {
            title,
            detail: value,
          };
        }
        if (
          specifications.getElementsByClassName("included-parts").length > 0
        ) {
          const IncludedParts =
            specifications.getElementsByClassName("included-parts")[index];
          return {
            title: "included_parts",
            detail: IncludedParts,
          };
        }
        return {};
      })
      .filter((e) => e.title === "specifications" || e.title === "powering");

    return result;
  } catch (error) {
    return error;
  }
};

export default getProductById;
