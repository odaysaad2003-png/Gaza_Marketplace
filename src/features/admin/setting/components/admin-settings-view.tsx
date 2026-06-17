import {AlertTriangle} from "lucide-react";

import {
    contactPolicySettings,
    marketplaceSettings,
    moderationSettings,
    systemStatusItems,
} from "../config/admin-settings";
import {SettingsField} from "./settings-field";
import {SettingsSectionCard} from "./settings-section-card";
import {SettingsStatusCard} from "./settings-status-card";

export function AdminSettingsView() {
    return (
        <div className="space-y-8">
            <header className="space-y-4">
                <div className="inline-flex rounded-full border border-border bg-muted px-4 py-2 text-sm font-medium text-muted-foreground">
                    الإعدادات
                </div>

                <div className="max-w-3xl space-y-3">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        إعدادات لوحة التحكم
                    </h1>

                    <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                        واجهة إعدادات إدارية تحاكي أنظمة الشركات، وتوضح كيف يمكن لاحقًا ربط الإعدادات مع Backend وقاعدة
                        بيانات وصلاحيات حقيقية.
                    </p>
                </div>
            </header>

            <section className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                        <AlertTriangle className="h-5 w-5" />
                    </div>

                    <div className="space-y-1">
                        <h2 className="text-base font-semibold text-foreground">Read-only Settings</h2>
                        <p className="text-sm leading-7 text-muted-foreground">
                            هذه الصفحة حاليًا للعرض والتدريب فقط. الإعدادات لا يتم حفظها بعد تحديث الصفحة لأن المشروع لا
                            يحتوي Backend أو Authentication في هذه المرحلة.
                        </p>
                    </div>
                </div>
            </section>

            <section className="grid gap-5 lg:grid-cols-3">
                {systemStatusItems.map((item) => (
                    <SettingsStatusCard
                        key={item.label}
                        label={item.label}
                        value={item.value}
                        description={item.description}
                        icon={item.icon}
                    />
                ))}
            </section>

            <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
                <SettingsSectionCard title="Marketplace Profile" description="إعدادات عامة تصف هوية السوق ونطاق عمله.">
                    {marketplaceSettings.map((setting) => (
                        <SettingsField
                            key={setting.label}
                            label={setting.label}
                            description={setting.description}
                            value={setting.value}
                            icon={setting.icon}
                        />
                    ))}
                </SettingsSectionCard>

                <SettingsSectionCard
                    title="Moderation Preferences"
                    description="خيارات تحاكي سلوك مراجعة وإدارة المنتجات."
                >
                    {moderationSettings.map((setting) => (
                        <SettingsField
                            key={setting.label}
                            label={setting.label}
                            description={setting.description}
                            enabled={setting.enabled}
                            icon={setting.icon}
                        />
                    ))}
                </SettingsSectionCard>
            </div>

            <SettingsSectionCard
                title="Contact & Safety Policy"
                description="إعدادات مرتبطة بطريقة ظهور معلومات التواصل والتنبيهات الأمنية."
            >
                <div className="grid gap-3 lg:grid-cols-3">
                    {contactPolicySettings.map((setting) => (
                        <SettingsField
                            key={setting.label}
                            label={setting.label}
                            description={setting.description}
                            enabled={setting.enabled}
                            icon={setting.icon}
                        />
                    ))}
                </div>
            </SettingsSectionCard>
        </div>
    );
}
