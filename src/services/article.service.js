import prisma from "../prisma/init.prisma";

export const articleService = {
  findAll: async (req, res) => {
    //(page -1) * pageSize
    let { page, pageSize, filters } = req.query;
    page = +page > 0 ? +page : 1;
    pageSize = +pageSize > 0 ? +pageSize : 3;
    const skip = (page - 1) * pageSize;

    filters = JSON.parse(filters || `{}`);

    const where = {
      views: 15,
      content: {
        contains: "About",
      },
    };
    console.log(Object.entries(where));
    Object.entries(where).forEach((item, index, arr) => {
      console.log({ item: item });
      console.log({ arr: arr });
    });

    const articles = await prisma.articles.findMany({
      skip: skip, //OFFSET: tức là bắt đầu từ index thứ mấy
      take: pageSize, //LIMIT
      orderBy: {
        createdAt: "asc",
      },
      where: where,
    });

    const totalItem = await prisma.articles.count({
      where: where,
    });
    const totalPage = Math.ceil(totalItem / pageSize);

    return {
      page: page, //số trang
      pageSize: pageSize, // 1 trang có bao nhiêu Item
      totalItem: totalItem, //Tổng cộng có bao nhiêu item
      totalPage: totalPage, //Tổng cộng bao nhiêu trang
      items: articles,
    };
  },
};
