﻿using Fur.DependencyInjection;
using Fur.UnifyResult;
using System.Reflection;

namespace Microsoft.Extensions.DependencyInjection
{
    /// <summary>
    /// 规范化结果服务拓展
    /// </summary>
    [SkipScan]
    public static class UnifyResultServiceCollectionExtensions
    {
        /// <summary>
        /// 添加规范化结果服务
        /// </summary>
        /// <param name="mvcBuilder"></param>
        /// <returns></returns>
        public static IMvcBuilder AddUnifyResult(this IMvcBuilder mvcBuilder)
        {
            mvcBuilder.AddUnifyResult<RESTfulResultProvider>();

            return mvcBuilder;
        }

        /// <summary>
        /// 添加规范化结果服务
        /// </summary>
        /// <typeparam name="TUnifyResultProvider"></typeparam>
        /// <param name="mvcBuilder"></param>
        /// <returns></returns>
        public static IMvcBuilder AddUnifyResult<TUnifyResultProvider>(this IMvcBuilder mvcBuilder)
            where TUnifyResultProvider : class, IUnifyResultProvider
        {
            // 获取规范化提供器模型
            UnifyResultContext.RESTfulResultType = typeof(TUnifyResultProvider).GetCustomAttribute<UnifyModelAttribute>().ModelType;

            // 添加规范化提供器
            mvcBuilder.Services.AddSingleton<IUnifyResultProvider, TUnifyResultProvider>();

            // 添加成功规范化结果
            mvcBuilder.AddMvcOptions(options =>
            {
                options.Filters.Add<SuccessUnifyResultFilter>();
            });

            return mvcBuilder;
        }
    }
}