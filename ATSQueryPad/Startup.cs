using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ATSQueryPad.Startup))]
namespace ATSQueryPad
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
