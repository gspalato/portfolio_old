export type VariantType<
	T extends {
		[v: string]: {
			[n: string]: string;
		};
	}
> = {
	[V in keyof T]: keyof T[V];
};
