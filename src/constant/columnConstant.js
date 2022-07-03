const columnConstant = {
  detailDataColumns: [
    { title: "日期", dataIndex: "dataDate" },
    { title: "（父）ASIN", dataIndex: "parentAsin" },
    { title: "（子）ASIN", dataIndex: "sonAsin" },
    { title: "商品名称", dataIndex: "productName", ellipsis: true },
    { title: "会话次数 – 移动应用", dataIndex: "sessionCountMobile" },
    { title: "会话次数 – 浏览器", dataIndex: "sessionCountWeb" },
    { title: "会话次数 – 总计", dataIndex: "sessionCountAll" },
    { title: "会话百分比 – 移动应用", dataIndex: "sessionPercentageMobile" },
    { title: "会话百分比 – 浏览器", dataIndex: "sessionPercentageWeb" },
    { title: "会话百分比 – 总计", dataIndex: "sessionPercentageAll" },
    { title: "页面浏览量 – 移动应用", dataIndex: "viewCountMobile" },
    { title: "页面浏览量 – 浏览器", dataIndex: "viewCountWeb" },
    { title: "页面浏览量 – 总计", dataIndex: "viewCountAll" },
    {
      title: "页面浏览量百分比 – 移动应用",
      dataIndex: "viewCountPercentageMobile",
    },
    { title: "页面浏览量百分比 – 浏览器", dataIndex: "viewCountPercentageWeb" },
    { title: "页面浏览量百分比 – 总计", dataIndex: "viewCountPercentageAll" },
    { title: "推荐报价（购买按钮）百分比", dataIndex: "buyButtonPercentage" },
    { title: "已订购商品数量", dataIndex: "orderedProductCount" },
    { title: "已订购商品数量 - B2B", dataIndex: "orderedProductCountB2b" },
    { title: "商品会话百分比", dataIndex: "productSessionPercentage" },
    { title: "商品会话百分比 - B2B", dataIndex: "productSessionPercentageB2b" },
    { title: "已订购商品销售额", dataIndex: "orderedProductSales" },
    { title: "已订购商品销售额 - B2B", dataIndex: "orderedProductSalesB2b" },
    { title: "订单商品总数", dataIndex: "orderProductCount" },
    { title: "订单商品总数 - B2B", dataIndex: "orderProductCountB2b" },
  ],
  analyzeDataColumns: [
    { title: "日期", dataIndex: "dataDate" },
    { title: "总销售额", dataIndex: "orderedProductSales" },
    { title: "总订单", dataIndex: "orderedProductCount" },
    { title: "自然订单", dataIndex: "natureOrder" },
    { title: "浏览量-移动应用", dataIndex: "viewCountMobile" },
    { title: "浏览量-浏览器", dataIndex: "viewCountWeb" },
    { title: "浏览量", dataIndex: "viewCountAll" },
    { title: "点击-移动应用", dataIndex: "sessionCountMobile" },
    { title: "点击-浏览器", dataIndex: "sessionCountWeb" },
    { title: "点击", dataIndex: "sessionCountAll" },
    { title: "点击率-移动应用", dataIndex: "sessionPercentageMobile" },
    { title: "点击率-浏览器", dataIndex: "sessionPercentageWeb" },
    { title: "点击率", dataIndex: "sessionPercentageAll" },
    { title: "业务报告转化率", dataIndex: "cr" },
    { title: "广告曝光", dataIndex: "displayVol" },
    { title: "广告点击", dataIndex: "clickVol" },
    { title: "广告点击率", dataIndex: "adCtr" },
    { title: "广告订单量", dataIndex: "adOrderCount" },
    { title: "平均单次点击价格", dataIndex: "clickPricePer" },
    { title: "获客成本", dataIndex: "customCostPer" },
    { title: "广告转化率", dataIndex: "adCr" },
    { title: "广告花费", dataIndex: "adCost" },
    { title: "广告销售额", dataIndex: "adSalesAmount" },
    { title: "广告ACOS", dataIndex: "adAcos" },
    { title: "广告订单占比", dataIndex: "adOrderPercentage" },
    { title: "广告费率", dataIndex: "adCostRate" },
    { title: "广告销售额占比", dataIndex: "adSalesAmountPercentage" },
    { title: "广告销售额贡献率", dataIndex: "adSalesAmountCr" },
  ],

  adDataColumns: [
    { title: "开始日期", dataIndex: "dataDate" },
    { title: "广告组合名称", dataIndex: "adCollectionName" },
    { title: "货币", dataIndex: "ccyCode" },
    { title: "广告活动名称", dataIndex: "adName" },
    { title: "广告组名称", dataIndex: "adGroupName" },
    { title: "广告SKU", dataIndex: "msku" },
    { title: "广告ASIN", dataIndex: "asin" },
    { title: "展示量", dataIndex: "displayVol" },
    { title: "点击量", dataIndex: "clickVol" },
    { title: "点击率(CTR)", dataIndex: "ctr", ellipsis: true },
    { title: "每次点击成本(CPC)", dataIndex: "cpc" },
    { title: "花费", dataIndex: "cost" },
    { title: "7天总销售额", dataIndex: "sevenSalesAmount" },
    { title: "广告成本销售比(ACOS)", dataIndex: "acos", ellipsis: true },
    { title: "投入产出比(ROAS)", dataIndex: "roas" },
    { title: "7天总订单数(#)", dataIndex: "sevenOrders" },
    { title: "7天总销售量(#)", dataIndex: "sevenSales" },
    { title: "7天的转化率", dataIndex: "sevenConversionRate", ellipsis: true },
    { title: "7天内广告SKU销售量(#)", dataIndex: "sevenAdSkuSales" },
    { title: "7天内其他SKU销售量(#)", dataIndex: "sevenOtherSkuSales" },
    { title: "7天内广告SKU销售额", dataIndex: "sevenAdSkuSalesAmount" },
    { title: "7天内其他SKU销售额", dataIndex: "sevenOtherSkuSalesAmount" },
  ],

  skuAsinColumns: [
    {
      title: "SKU",
      dataIndex: "sku",
    },
    {
      title: "MSKU",
      dataIndex: "msku",
    },
    {
      title: "ASIN",
      dataIndex: "asin",
    },
    {
      title: "账号",
      dataIndex: "account",
    },
    {
      title: "开售时间",
      dataIndex: "firstSellDate",
    },
    {
      title: "主链接",
      dataIndex: "mainAccount",
    },
  ],
};

export default columnConstant;
